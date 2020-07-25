
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
  gulp.watch("./sass/*.scss", doSass)
  gulp.watch([
    '*.html',
    '*.js',
    '*.css'
  ]).on('change', server.reload);
  gulp.watch('./sass/*.scss', sass)
}

function doSass(done) {
  gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    done();
}

exports.doSass = doSass;
exports.serve = serve;
