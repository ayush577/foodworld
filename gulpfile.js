// Include gulp
var gulp = require('gulp');

// Include Plugins
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');


// scss to css complie

function style(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
  };
  

//move js files to the src

function script(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js','node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream());
  };

  //server implementation
function watch() {
  
  browserSync.init({
  server:"./src"
  });

  gulp.watch(['src/scss/**/*.scss'], style);
  
  gulp.watch("src/*.html").on('change', browserSync.reload);

  gulp.watch(['src/js/**/*.js'], script);

  };

exports.style = style;
exports.watch = watch;
// // exports.js = js;
// // exports.serve = serve;

