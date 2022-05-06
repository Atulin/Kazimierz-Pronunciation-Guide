'use strict';
import { pipeline } from 'stream';

import gulp from 'gulp';
import postcss from 'gulp-postcss';
import { sass } from '@mr-hope/gulp-sass'
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import exec from 'gulp-exec';

// CSS processors
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';

// Image processors
import webp from 'gulp-webp';

// JS processors
import gulpEsbuild from 'gulp-esbuild';


// CSS tasks
export const css = () =>
    pipeline(
        gulp.src('./src/css/*.{sass,scss}'),
        sourcemaps.init({}),
        sass(),
        gulp.dest('./dist/css'),
        rename({ suffix: '.min' }),
        postcss([
            autoprefixer,
            csso({ comments: false }),
        ]),
        sourcemaps.write('./', {}),
        gulp.dest('./dist/css'),
        errorHandler,
    );
export const watchCss = () => gulp.watch(['./src/css/*.{sass,scss}', './src/css/elements/*.{sass,scss}'], css);


// TS tasks
export const ts = () =>
    pipeline(gulp.src('./src/js/**/*.ts'),
        gulpEsbuild({
            outdir: '.',
            minify: true,
            sourcemap: true
        }),
        gulp.dest('./dist/js'),
        errorHandler,
    );

export const watchTs = () => gulp.watch('./src/js/**/*.ts', ts);

// Process images
export const img = () =>
    pipeline(
        gulp.src('./src/img/**/*.{png,jpg}'),
        gulp.dest('./dist/img'),
        webp(),
        gulp.dest('./dist/img'),
        errorHandler,
    );

// Handlebars
export const hbs = () =>
    pipeline(
        gulp.src('./src/**/*.hbs'),
        exec('npm run deno:build', {
            continueOnError: false,
            pipeStdout: false,
        }),
        exec.reporter({
            err: true,
            stderr: true,
            stdout: true,
        }),
        errorHandler,
    );
export const watchHbs = () => gulp.watch(['./src/**/*.hbs', './data/**/*'], hbs);


// All tasks
export const all = gulp.parallel([css, ts, img, hbs]);
export const watchAll = gulp.parallel([watchCss, watchTs, watchHbs]);

const errorHandler = (err) => !!err && console.error(err);