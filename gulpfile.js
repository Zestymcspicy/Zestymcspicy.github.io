
'use-strict'
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

sass.compiler = require('node-sass');

gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./"
  });
})

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
})


gulp.task('watch-reload', function() {
  gulp.watch("./sass/*.scss", ['sass']);
  gulp.watch("css/*.css", browserSync.reload);
  gulp.watch("index.html", browserSync.reload);
  gulp.watch("js/*.js", browserSync.reload);
})

gulp.task('default', gulp.series('browser-sync', 'watch-reload'))
