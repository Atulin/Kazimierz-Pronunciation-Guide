const fs = require('fs');
const fse = require('fs-extra');
const Handlebars = require("handlebars");
const toml = require('toml');
const dayjs = require('dayjs');
const crypto = require('crypto');
const ci = console.info;

ci('Build started')
ci('┠┬ Loading data...');
let data = toml.parse(fs.readFileSync('./data/data.toml').toString());
ci('┃└ Loaded!');

// Modify data
data.year = new Date().getFullYear();

// Move root files
ci('┠┬ Moving wwwroot files...');
fse.copySync('./src/wwwroot/', './dist/', {});
ci('┃└ Done!');

// Create index file
ci('┠┬ Generating index.html...')
let index = render('./src/pages/index.hbs', data);
fs.writeFile('./dist/index.html', index, console.error);
ci('┃└ Done!');
ci('┗━ All done!');


function render(filename, data) {
    Handlebars.registerHelper('date', (date, format = null) => dayjs(date.toString().split('(')[0]).format(format));
    Handlebars.registerHelper('toLower', str => str.toLowerCase());
    Handlebars.registerHelper('bust', str => `${str}?=${crypto.randomUUID()}`)

    const source = fs.readFileSync(filename, 'utf8').toString();
    const template = Handlebars.compile(source);
    return template(data);
}
