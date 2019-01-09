var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('default', ['browser-sync'], function() {
  gulp.watch("css/*.css", browserSync.reload);
  gulp.watch("index.html", browserSync.reload)
})

gulp.task('browser-sync', function() {
  browserSync.init({
    server: "./"
  });
})
