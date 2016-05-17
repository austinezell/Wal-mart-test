const gulp = require('gulp');
const sass = require('gulp-sass');
const prefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean-css');
const generateContent = require('./createContent');
const jade = require('gulp-jade');

gulp.task('default', ['sass', 'jade', 'watch', 'assets']);

gulp.task('dev', ['sass', 'populate', 'jade', 'assets']);

const dir = {
  src: {
    sass: './src/sass/**/*.scss',
    jade: './src/jade/**/*.jade',
    assets: './src/assets/**/*'
  },
  out: {
    css: './public/styles',
    html: './public/',
    assets: './public/'
  }
}

gulp.task("assets", function(){
  return gulp.src(dir.src.assets)
  .pipe(gulp.dest(dir.out.assets))
})

gulp.task('sass', function(done){
  gulp.src(dir.src.sass)
  .pipe(sass())
  .on('error', sass.logError)
  .pipe(prefixer({
    browsers: ['last 3 versions'],
    cascade: false
  }))
  .pipe(clean())
  .pipe(gulp.dest(dir.out.css))
  .on('end', done)
});

gulp.task("jade", function(done){
  gulp.src(dir.src.jade)
  .pipe(jade())
  .pipe(gulp.dest(dir.out.html))
  .on('end', done)
})

gulp.task("populate", function(){
  return generateContent();
})

gulp.task('watch', function(){
  gulp.watch(dir.src.sass, ['sass'])
  gulp.watch(dir.src.jade, ['jade'])
})
