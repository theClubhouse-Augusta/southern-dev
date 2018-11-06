var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


  gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('docs/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: 'docs'
      }
    })
  })

  gulp.task('watch', ['browserSync', 'sass'], function() {
    gulp.watch('src/sass/*.sass', ['sass']);
  });
  

