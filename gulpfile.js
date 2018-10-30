const gulp = require('gulp')
const cleanCss = require('gulp-clean-css')
const uglify = require('gulp-uglify-es').default
const gutil = require('gulp-util')
const htmlmin = require('gulp-htmlmin')

gulp.task('html', () => {
  return gulp.src('src/index.html')
    // .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('public'))
})

gulp.task('script', () => {
  return gulp.src('src/scripts.js')
    .pipe(uglify({ mangle: { toplevel: true } }))
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()) })
    .pipe(gulp.dest('public'))
})

gulp.task('css', () => {
  return gulp.src('src/styles.css')
    .pipe(cleanCss())
    .pipe(gulp.dest('public'))
})
