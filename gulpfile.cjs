'use strict';

const gulp = require('gulp');
const cleanCSS = require("gulp-clean-css");

function minifyCSS() {
  return gulp.src('./dist/css/index.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css'));
};

exports.minifyCSS = minifyCSS;
exports.watch = function () {
  gulp.watch('./src/sass/**/*.scss', minifyCSS);
};