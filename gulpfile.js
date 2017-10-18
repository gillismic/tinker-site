var gulp        = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./assets/sass/**/*.scss', ['sass'])
    gulp.watch('./*.html').on('change', browserSync.reload);
});
gulp.task('sass', function() {
    gulp.src('./assets/sass/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/css'))
    .pipe(browserSync.stream());
});
gulp.task('watch:sass', function() {
    gulp.watch('./assets/sass/**/*.scss', ['sass'])
});