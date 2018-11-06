var gulp = require('gulp');
var sass = require('gulp-sass');


  gulp.task('sass', function(){
    return gulp.src('src/sass/*.sass')
      .pipe(sass())
      .pipe(gulp.dest('dist/css'))
  });

  gulp.task('watch', function() {
    gulp.watch('src/sass/*.sass', ['sass']);
  });
  

