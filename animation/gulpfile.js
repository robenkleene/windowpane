// devDependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Built-in
var path = require('path');

// Paths
var paths = {
  html: "./",
  sass: {
    src: "./src/sass",
    dest: "./dest/css"

  }
};

// Globs
var globs = {
  sass: path.join(paths.sass.src, '**/*.scss'),
  html: path.join(paths.html, '*.html')
};

// Tasks

gulp.task('sass', function () {
  return gulp.src(globs.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.sass.dest))
    .pipe(browserSync.stream());
});


gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: paths.html.examples
    });
    gulp.watch(globs.sass, ['sass']);
    gulp.watch(globs.html)
      .on('change', browserSync.reload);
});

gulp.task('watch', ['sass'], function () {
  gulp.watch(globs.sass, ['sass']);
});

gulp.task('default', ['sass']);
