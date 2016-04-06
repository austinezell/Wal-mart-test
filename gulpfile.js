const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const generateContent = require('./createContent');
const jade = require('gulp-jade');

gulp.task('default', ['sass', 'jade', 'watch']);

gulp.task('dev', ['sass', 'populate', 'jade']);

gulp.task('sass', function(done){
  gulp.src('./src/sass/style.scss')
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

gulp.task("jade", function(done){
  gulp.src('./src/jade/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./public/html/'))
  .on('end', done)
})

gulp.task("populate", function(){
  return generateContent();
})

gulp.task('watch', function(){
  gulp.watch('./src/sass/**/*.scss', ['sass'])
  gulp.watch('./src/jade/**/*.jade', ['jade'])
})
