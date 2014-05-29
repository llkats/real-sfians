var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src(['styles.scss'])
    .pipe(sass({sourceComments: 'map'}))
    .pipe(gulp.dest('.'));
});

gulp.task('watch', function() {
  gulp.watch('*.scss', ['sass']);
});

gulp.task('init', ['sass']);

gulp.task('default', ['watch']);
