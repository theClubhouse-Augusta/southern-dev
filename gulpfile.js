var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


  gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
      .pipe(browserSync.reload({
        stream: true
      }))
  });

  gulp.task('browserSync', function() {
    browserSync.init({
      server: {
        baseDir: './'
      }
    })
  })

  gulp.task('watch', ['sass', 'browserSync'], function() {
    gulp.watch('src/sass/*.sass', ['sass']);
    gulp.watch('src/js/*.js', browserSync.reload);
  });
  

