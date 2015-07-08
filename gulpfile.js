var gulp = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha'); //using gulp-mocha plugin

gulp.task('jshint', function(){ //grunt.task(name, fn) --> registers a function with the name jshint
  return gulp.src(['./test/*.js', '*.js']) //gulp.src points to the files we want to use. *.js will read files ending in .js
              .pipe(jshint()) //.pipe to chain output into other plugins
              .pipe(jshint.reporter('default')); //reporter formats and color codes output
});

gulp.task('test', function() {
  return gulp.src('test/*.js')
             .pipe(mocha( { reporter: 'nyan' } ));
});

gulp.task('watch', function() {
  return gulp.watch(['./**/*.js', '*.js'], ['test', 'jshint']); //gulp.watch will run the test&jshint tasks whenever a file ending in .js is saved in current dir and test subdir.
});
