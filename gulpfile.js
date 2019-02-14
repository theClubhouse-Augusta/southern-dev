var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
// var cache = require('gulp-cache');

var pug = require("gulp-pug");

// JS Gulp Plugins
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

/*
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.reload({
      stream: true
    }))
}); */

gulp.task('views', function () {
  return gulp.src('src/views/pages/*.pug')
    .pipe(pug().on('error', function (error) {
      console.log(error.plugin + '\n' + error.message + '\n1. Stop Gulp\n2. Fix error\n3. npm run start');
    }))
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('css', function(){
  return gulp.src(['src/css/normalize.css'])
    .pipe(concat('base.css'))
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

  gulp.task('sass', function(){
    return gulp.src('src/sass/main.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('docs/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('js', function() {
    return gulp.src('src/js/*.js')
      .pipe(sourcemaps.init())
      .pipe(babel({
        presets: ['es2015']
      }))
      .pipe(concat('main.js'))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('docs/js'))
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
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './docs'
      }
    })
  });

  gulp.task('watch', ['views', 'css', 'sass', 'js', 'browserSync'], function() {
    gulp.watch('src/views/**/*.pug', ['views']);
    gulp.watch('src/css/*.css', ['css']);
    gulp.watch('src/sass/**/*.sass', ['sass']);
    gulp.watch('src/js/*.js', ['js']);
    // gulp.watch('src/*.html', ['html']);
    gulp.watch('src/images/*.+(png|jpg|gif|svg)', ['images']);
  });


