const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const generateContent = require('./createContent');

gulp.task('default', ['sass', 'watch']);

gulp.task('dev', ['sass', 'populate']);

gulp.task('sass', function(done){
  gulp.src('./sass/style.scss')
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))
  .pipe(clean())
  .pipe(gulp.dest('./public/styles'))
  .on('end', done)
});

gulp.task("populate", function(){
  return generateContent();
})

gulp.task('watch', function(){
  gulp.watch('./sass/style.scss', ['sass'])
})
