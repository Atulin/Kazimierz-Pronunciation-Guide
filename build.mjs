import { promises as fs } from 'fs';
import fse from 'fs-extra';
import Handlebars from 'handlebars';
import toml from 'toml';
import dayjs from 'dayjs';
import crypto from 'crypto';
import { marked } from 'marked';
import path from 'path';

const ci = console.info;

ci('Build started');
ci('┠┬ Loading data...');
const data = await loadData('./data/data.toml');
ci('┃└ Loaded');

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

async function loadData(path) {
	const text = await fs.readFile(path);
	const data = toml.parse(text.toString());
	console.log(data);
	return {
		...data,
		year: new Date().getFullYear(),
	};
}

function registerHelpers() {
	Handlebars.registerHelper('date', (date, format = null) => dayjs(date.toString().split('(')[0]).format(format));
	Handlebars.registerHelper('dateISO', (date) => dayjs(date).toISOString());
	Handlebars.registerHelper('toLower', (str) => str.toLowerCase());
	Handlebars.registerHelper('bust', (str) => `${str}?=${crypto.randomUUID()}`);
	Handlebars.registerHelper('normalize', (str) => str.toLowerCase().replace(/\s+/, '_'));
	Handlebars.registerHelper('md', (str) => marked.parse(str));
}

async function registerPartials() {
	const partials = await fs.readdir('./src/partials/');
	for (const p of partials) {
		const partial = await fs.readFile(`./src/partials/${p}`);
		Handlebars.registerPartial(path.parse(p).name, partial.toString());
	}
}

async function render(filename, data) {
	const source = await fs.readFile(filename, 'utf8');
	const template = Handlebars.compile(source.toString());
	return template(data);
}
