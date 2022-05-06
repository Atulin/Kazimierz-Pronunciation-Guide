import { promises as fs } from 'fs';
import fse from 'fs-extra';
import Handlebars from 'handlebars';
import path from 'path';

import data from './data/data.mjs';
import { DateTime } from 'luxon';
import crypto from 'crypto';
import { marked } from 'marked';

const ci = console.info;

ci('Build started');

// Move root files
ci('┠┬ Moving wwwroot files...');
await fse.copy('./src/wwwroot/', './dist/', {});
ci('┃└ Done');

// Create index file
ci('┠┬ Generating index.html...');
ci('┃├┬ Registering helpers');
registerHelpers();
ci('┃│└ Registered');
ci('┃├┬ Registering partials');
await registerPartials();
ci('┃│└ Registered');
const index = await render('./src/pages/index.hbs', data);
ci('┃├ Rendered');
await fs.writeFile('./dist/index.html', index);
ci('┃└ Saved');
ci('┗━ All done!');

function registerHelpers() {
	const hbsHelpers = {
		date: (date, format = 'yyyy.MM.dd HH:mm') =>
			DateTime.fromISO(date, { locale: 'en' }).toFormat(format),

		dateISO: (date) => DateTime.fromJSDate(date).toISO(),

		year: () => DateTime.now().year,

		toLower: (str) => str.toLowerCase(),

		bust: (str) => `${str}?uuid=${crypto.randomUUID()}`,

		normalize: (str) =>
			str.toLowerCase().replace(/\s+/, '_'),

		md: (str) => marked.parse(str),
	};

	for (const [key, value] of Object.entries(hbsHelpers)) {
		Handlebars.registerHelper(key, value);
	}
}

async function registerPartials() {
	const partials = await fs.readdir('./src/pages/partials/');
	for (const p of partials) {
		const partial = await fs.readFile(`./src/pages/partials/${p}`);
		Handlebars.registerPartial(path.parse(p).name, partial.toString());
	}
}

async function render(filename, data) {
	const source = await fs.readFile(filename, 'utf8');
	const template = Handlebars.compile(source.toString());
	return template(data);
}
