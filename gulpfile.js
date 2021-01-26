const gulp = require('gulp');
const browserSync = require('browser-sync').create();

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = defaultTask



  // Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});