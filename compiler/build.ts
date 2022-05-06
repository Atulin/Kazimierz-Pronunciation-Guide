import { copy } from "https://deno.land/std@0.138.0/fs/copy.ts";
import { resolve, fromFileUrl, dirname } from "https://deno.land/std@0.138.0/path/mod.ts";
import { Handlebars, HandlebarsConfig } from 'https://deno.land/x/handlebars/mod.ts';
import { ensureDir, ensureFile } from 'https://deno.land/std@0.138.0/fs/mod.ts';
import { Marked } from "https://deno.land/x/markdown@v2.0.0/mod.ts";
import { datetime } from "https://deno.land/x/ptera/mod.ts";

import data from '../data/data.ts';

const p = (path: string) => resolve(dirname(fromFileUrl(Deno.mainModule)), path);
const ci = console.info;

// Move root files
ci('┠┬ Moving wwwroot files...');
await ensureDir(p('../dist/'))
await copy(p('../src/wwwroot/'), p('../dist/'), { overwrite: true });
ci('┃└ Done');

// Create index file
ci('┠┬ Generating index.html...');
ci('┃├┬ Preparing renderer');
const hbsConfig: HandlebarsConfig = {
	baseDir: p('../src/pages/'),
	extname: '.hbs',
	partialsDir: 'partials/',
	layoutsDir: 'layouts/',
	defaultLayout: 'main',
	cachePartials: true,
	helpers: {
		date: (date: Date, format = 'dd.MM.yyyy HH:mm'): string => datetime(date).format(format),
		dateISO: (date: Date): string => datetime(date).toISO(),
		year: (): number => datetime().year,
		toLower: (str: string): string => str.toLowerCase(),
		bust: (str: string): string => `${str}?=${crypto.randomUUID()}`,
		normalize: (str: string): string => str.toLowerCase().replace(/\s+/, '_'),
		md: (str: string): string => Marked.parse(str).content,
	},
	compilerOptions: undefined
};
const hbs = new Handlebars(hbsConfig);
ci('┃│└ Done');
const index = await hbs.renderView('index', data as unknown as Record<string, unknown>);
ci('┃├ Rendered');
await ensureFile(p('../dist/index.html'));
await Deno.writeTextFile(p('../dist/index.html'), index);
ci('┃└ Saved');
ci('┗━ All done!');
