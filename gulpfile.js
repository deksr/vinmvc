

// Gulp works with vanilla javascript in js files in react or elese throws error when it runs into html tags (not working with babel). And too many issues. for minifying etc will be using webpack plugins in webpack. 



var gulp = require('gulp');
var webpack = require('webpack-stream');
// var webpacktwo = require('gulp-webpack');
// var react = require('gulp-react');
const babel = require('gulp-babel');
var uglify = require('gulp-uglify');



gulp.task('default', function(){
	console.log('gulp gulp')
})


gulp.task('scripts', function() {
	console.log("running")
  // return gulp.src(['./public/javascripts/*.js', '!./node_modules/**', '!./public/javascripts/entry.js'])
  return gulp.src(['./public/javascripts/*.js', '!./public/javascripts/entry.js'])
    .pipe(webpack())
    // .pipe(webpacktwo())
    // .pipe(react())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify().on('error', function(e){
      console.log(e);
    }))
    .pipe(gulp.dest('z-min-js'));
});



gulp.task('default', ['scripts']);

// function errorHandler (error) {
//   console.log(error.toString());
//   this.emit('end');
// }