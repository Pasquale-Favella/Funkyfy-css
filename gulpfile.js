const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return src('funkyfy/**/*.scss')
    .pipe(sass())
    .pipe(dest('css'))
}

function watchTask() {
  watch(['funkyfy/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)