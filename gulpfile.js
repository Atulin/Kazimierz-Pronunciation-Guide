'use strict';
const {pipeline} = require('stream');

const gulp = require('gulp');
const postcss = require('gulp-postcss');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const sourcemaps = require("gulp-sourcemaps");
const exec = require('gulp-exec');

// CSS processors
const autoprefixer = require('autoprefixer');
const csso = require('postcss-csso');

// Image processors
const webp = require('gulp-webp');

// JS processors
const terser = require('gulp-terser');
const tsProject = require('gulp-typescript').createProject('tsconfig.json');

// CSS tasks
const css = () => pipeline(gulp.src('./src/css/*.{sass,scss}'),
    sourcemaps.init({}),
    sass({}, {}),
    gulp.dest('./dist/css'),
    rename({suffix: '.min'}),
    postcss([
        autoprefixer,
        csso({comments: false})
    ], {}),
    sourcemaps.write('./', {}),
    gulp.dest('./dist/css'),
    errorHandler,
);
exports.css = css;

const watchCss = () => gulp.watch(['./src/css/*.{sass,scss}', './src/css/elements/*.{sass,scss}'], css);
exports.watchCss = watchCss;

// TS tasks
const ts = () => pipeline(gulp.src('./src/js/**/*.ts'),
    sourcemaps.init({}),
    tsProject(),
    gulp.dest('./dist/js'),
    rename({suffix: '.min'}),
    terser(),
    sourcemaps.write('./', {}),
    gulp.dest('./dist/js'),
    errorHandler,
);
exports.ts = ts;

const watchTs = () => gulp.watch('./src/js/**/*.ts', ts);
exports.watchTs = watchTs;

// Process images
const img = () => pipeline(gulp.src('./src/img/**/*.{png,jpg}'),
    gulp.dest('./dist/img'),
    webp(),
    gulp.dest('./dist/img'),
    errorHandler,
);
exports.img = img;

// Handlebars
const hbs = () => pipeline(gulp.src('./src/**/*.hbs'),
    exec('node build.mjs', {
        continueOnError: false,
        pipeStdout: false,
    }),
    exec.reporter({
        err: true,
        stderr: true,
        stdout: true
    }),
    errorHandler
);
exports.hbs = hbs;

const watchHbs = () => gulp.watch(['./src/**/*.hbs', './data/**/*'], hbs);
exports.watchHbs = watchHbs;

// All tasks
const all = gulp.parallel([css,ts, img, hbs]);
exports.all = all;

const watchAll = gulp.parallel([watchCss, watchTs, watchHbs, all]);
exports.watchAll = watchAll;

const errorHandler = err => !!err && console.error(err);
