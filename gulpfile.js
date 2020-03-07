
'use-strict'
var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('browser-sync').create();

// sass.compiler = require('node-sass');
function serve() {
  server.init({
    server: {
      baseDir: './',
    }
  })

  gulp.watch([
    '*.html',
    '*.js',
    '*.css'
  ]).on('change', server.reload);
}
// gulp.task('default', ['browser-sync'], function() {
//   gulp.watch("./sass/*.scss", ['sass']);
//   gulp.watch("css/*.css", browserSync.reload);
//   gulp.watch("index.html", browserSync.reload);
//   gulp.watch("js/*.js", browserSync.reload);
// })
//
// gulp.task('browser-sync', function() {
//   browserSync.init({
//     server: "./"
//   });
// })

function sass() {
  gulp.watch(['./sass/*.scss'])
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
}

exports.serve = serve;

// gulp.task('default', gulp.series('browser-sync', 'watch-reload'))
