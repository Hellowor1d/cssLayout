var gulp = require('gulp');
var sass        = require("gulp-ruby-sass");
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync').create();

gulp.task('bs',function(){
    browserSync.init({
        server:{
            directory:true,
            baseDir:"./"
        }
    })
})

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        directory:true,
        server: "./"
    });

    gulp.watch("app/source/scss/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});

/**
 * Compile with gulp-ruby-sass + source maps
 */
gulp.task('sass', () =>
    sass('app/source/scss/*.scss', {sourcemap: true})
        .on('error', sass.logError)
        // for inline sourcemaps 
        .pipe(sourcemaps.write())
        // for file sourcemaps 
        .pipe(sourcemaps.write('maps', {
            includeContent: false,
            sourceRoot: 'source'
        }))
        .pipe(gulp.dest('result'))
        .pipe(browserSync.stream())
);

gulp.task('default',['serve']);