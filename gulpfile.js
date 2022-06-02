'use strict';
var gulp = require('gulp'),
    terser = require('gulp-terser'),
    merge = require('merge-stream'),
    concat = require('gulp-concat'),
    del = require('del'),
    javascriptObfuscator = require('gulp-javascript-obfuscator');


// Clean output directory
gulp.task('clean', () => del(['dist']));

// Gulp task to minify JavaScript files
gulp.task('scripts', function() {
    var tasks = gulp.src('./src/js/**/*.js')
                    .pipe(concat('site.min.js'))
                    .pipe(terser())
                    .pipe(javascriptObfuscator())
                    .pipe(gulp.dest('./dist/js'));

    return merge(tasks);
  });