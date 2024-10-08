import fse from "fs-extra";
import Handlebars from "handlebars";
import path from "node:path";
import yaml from "yaml";
import { compressToUTF16 } from "lz-string";

import * as sass from "sass";
import postcss from "postcss";
import csso from "postcss-csso";
import autoprefixer from "autoprefixer";

import { DateTime } from "luxon";
import crypto from "node:crypto";
import { marked } from "marked";
import { Glob } from "bun";
import { type AllData, allDataSchema } from "./data/schema";
import { Timer } from "./timer.mjs";

const ci = console.info;
const timer = new Timer();

ci("Build started");

// Move root files
ci("┠─┬─ Moving wwwroot files...");
await fse.copy("./src/wwwroot/", "./dist/", {});
ci(`┃ └─ Done in ${timer.lap().toFixed(2)} ms`);

// Create index file
ci("┠─┬─ Generating index.html...");
ci("┃ ├─┬─ Registering helpers");
registerHelpers();
ci(`┃ │ └─ Registered in ${timer.lap().toFixed(2)} ms`);
ci("┃ ├─┬─ Registering partials");
await registerPartials();
ci(`┃ │ └─ Registered in ${timer.lap().toFixed(2)} ms`);
ci("┃ ├─┬─ Parsing data");
const data = await getData();
ci(`┃ │ └─ Parsed in ${timer.lap().toFixed(2)} ms`);
ci("┃ └─┬─ Rendering templates");
const index = await render("./src/pages/index.hbs", data);
ci(`┃   ├─ Rendered in ${timer.lap().toFixed(2)} ms`);
await Bun.write("./dist/index.html", index);
ci("┃   └─ Saved");
ci("┠─┬─ Compiling Typescript");
await compileTypescript();
ci(`┃ └─ Compiled in ${timer.lap().toFixed(2)} ms`);
ci("┠─┬─ Compiling SASS");
await compileSass();
ci(`┃ └─ Compiled in ${timer.lap().toFixed(2)} ms`);
ci(`┗━━ All done in ${timer.total().toFixed(2)} ms!`);

function registerHelpers() {
	const hbsHelpers = {
		date: (date: string, format = "yyyy.MM.dd HH:mm") =>
			DateTime.fromISO(date, { locale: "en" }).toFormat(format),

		dateISO: (date: Date) => DateTime.fromJSDate(date).toISO(),

		year: () => DateTime.now().year,

		toLower: (str: string) => str.toLowerCase(),

		bust: (str: string) => `${str}?uuid=${crypto.randomUUID()}`,

		normalize: (str: string) => str.toLowerCase().replace(/\s+/, "_"),

		md: (str: string) => marked.parse(str.trim(), { async: false }),

		mdCompressed: (str: string) =>
			compressToUTF16(marked.parse(str.trim(), { async: false })),

		compress: (str: string) => compressToUTF16(str),
	};

	for (const [key, value] of Object.entries(hbsHelpers)) {
		Handlebars.registerHelper(key, value);
	}
}

async function registerPartials() {
	const partials = new Glob("./src/pages/partials/*.hbs").scan();
	for await (const p of partials) {
		const partial = await Bun.file(p).text();
		Handlebars.registerPartial(path.parse(p).name, partial);
	}
}

async function getData(): Promise<AllData> {
	const data: AllData = {};
	const files = new Glob("./data/*.yml").scan();
	for await (const file of files) {
		const content = await Bun.file(file).text();
		const datum = yaml.parse(content);
		const name = path.parse(file).name;
		data[name] = datum;
	}
	const result = allDataSchema.safeParse(data);
	if (result.success) {
		return result.data;
	}

	throw result.error;
}

async function render(filename: string, data: AllData) {
	const source = await Bun.file(filename).text();
	const template = Handlebars.compile(source);
	return template(data);
}

async function compileTypescript() {
	await Bun.build({
		entrypoints: [...new Glob("./src/js/**/*.ts").scanSync()],
		outdir: "./dist/js",
		minify: true,
	});
}

async function compileSass() {
	const files = new Glob("./src/css/*.scss").scan();
	for await (const file of files) {
		const sassResult = sass.compile(file);
		const css = await postcss([autoprefixer, csso]).process(sassResult.css, {
			from: file,
		});

		for (const warning of css.warnings()) {
			console.warn(warning);
		}

		await Bun.write(`./dist/css/${path.parse(file).name}.css`, css.content);
	}
}
