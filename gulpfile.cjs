'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require("gulp-clean-css");

function buildStyles() {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
};

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch('./src/sass/**/*.scss', buildStyles);
};