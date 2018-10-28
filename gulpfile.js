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

    app.get('/.well-known/acme-challenge/:content', function(req, res) {
        var x = '9nbyuDS_ewIn_-5sTfBqFDuWxKIEf6hjzVIaG8HaS2o';
        var y = 'F5Pl8rUw-xaXI5pkBadQGnX7SWZXvG9uBNY9tIu46B4';
        if (y === req.params.content) {
            res.send('F5Pl8rUw-xaXI5pkBadQGnX7SWZXvG9uBNY9tIu46B4.LB98ZAzz2-Ox5nBvnsCR2HpW5Pdp13hdgDU4LK1dTxw');
        } else if (x === req.params.content) {
            res.send('9nbyuDS_ewIn_-5sTfBqFDuWxKIEf6hjzVIaG8HaS2o.LB98ZAzz2-Ox5nBvnsCR2HpW5Pdp13hdgDU4LK1dTxw');
        }
    })

    connect.server({
      port: process.env.PORT || 8081,
      middleware: function(connect, opt) {
        return [app];
      }
    });
});
