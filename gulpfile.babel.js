'use strict';

import gulp from 'gulp';
import connect from 'gulp-connect';

import config from './config.js';


gulp.task('connect', () => {
  connect.server({
    root: 'src',
    livereload: true,
    port: config.APP_PORT,
  });
});

gulp.task('html', () => {
  gulp.src('./src/*.html')
    .pipe(connect.reload());
});

gulp.task('html:watch', () => {
  gulp.watch(['./src/*.html'], ['html']);
});

gulp.task('watch', ['html:watch']);

gulp.task('server', ['connect', 'watch']);
gulp.task('default', ['server']);
