var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');


  gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('docs/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('js', function() {
    return gulp.src('src/js/*.js')
    .pipe(gulp.dest('docs/js'))
    .pipe(browserSync.reload({
      stream: true
    }))
  });

  gulp.task('html', function() {
    return gulp.src('src/*.html')
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.reload({
      stream: true
    }))
  });

  gulp.task('images', function() {
    return gulp.src('src/images/*.+(png|jpg|gif|svg)')
      .pipe(imagemin({
        interlaced: true
      }))
      .pipe(gulp.dest('docs/images'))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './docs'
      }
    })
  });

  gulp.task('watch', ['sass', 'js', 'browserSync'], function() {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    gulp.watch('src/*.html', ['html']);
  });


