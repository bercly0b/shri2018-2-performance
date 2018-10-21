const gulp = require('gulp')
const concat = require('gulp-concat')
const cleanCss = require('gulp-clean-css')
const uglify = require('gulp-uglify-es').default
const gutil = require('gulp-util')
const connect = require('gulp-connect-multi')

const devServer = connect()

gulp.task('html', () => {
  return gulp.src('src/index.html')
    .pipe(devServer.reload())
    .pipe(gulp.dest('public'))
})

gulp.task('script', () => {
  return gulp.src('src/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()) })
    .pipe(gulp.dest('public'))
    .pipe(devServer.reload())
})

gulp.task('scss', () => {
  return gulp.src('src/scss/**/*.scss')
    // .pipe(sourcemaps.init())
    .pipe(autoprefixer())
    .pipe(sass().on('error', sass.logError))
    .pipe(concat('style.css'))
    // .pipe(sourcemaps.write())
    .pipe(cleanCss())
    .pipe(gulp.dest('public'))
    .pipe(devServer.reload())
})

gulp.task('watchAll', () => {
  gulp.watch('src/scss/**/*.scss', ['scss'])
  gulp.watch('src/js/**/*.js', ['script'])
  gulp.watch('src/index.html', ['html'])
})


gulp.task('connect', devServer.server({
  root: ['./'],
  port: 9999,
  livereload: true,
  open: { browser: 'Google Chrome' }
}))


gulp.task('default', ['connect'])
// gulp.task('default', ['connect', 'watchAll'])
