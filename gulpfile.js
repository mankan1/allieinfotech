'use strict';
var gulp = require('gulp');
var connect = require('gulp-connect');
var express = require('express');

var sass = require('gulp-sass');
gulp.task('sass', function () {
  gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('connect', function() {

    var app = express();
    app.enable('trust proxy');
    app.use (function (req, res, next) {
            if (req.secure) {
                    next();
            } else {
                if (req.headers.host !== 'localhost:8081'){
                  res.redirect('https://' + req.headers.host + req.url);
                } else {
                    next();
                }
            }
    });

    connect.server({
      port: process.env.PORT || 8081,
      middleware: function(connect, opt) {
        return [app];
      }
    });
});
