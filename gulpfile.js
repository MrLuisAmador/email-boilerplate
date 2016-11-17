// Dependencies
// ======================================================
var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    inlinesource = require('gulp-inline-source'),
    inlineCss = require('gulp-inline-css'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    notify = require("gulp-notify");

// Error Handling
// ======================================================
var onError = function(err) {
    // Notfiy (message and sound)
    notify.onError({
        title:    "Gulp",
        subtitle: "Failure!",
        message:  "Error: <%= error.message %>",
        sound:    "Funk"
    })(err);

    this.emit('end');
};


// Tasks
// ======================================================

// Task: Sass
gulp.task('sass', function() {
   return gulp.src('working/css/scss/*.scss')
    .pipe(plumber({errorHandler: onError}))
    .pipe(sass())
    .pipe(gulp.dest('working/css/'));
});


// Task: Watch
gulp.task('watch', function() {
    gulp.watch('working/css/scss/**/*.scss', ['sass']);
});


// Task: Inline Styles
gulp.task('inline', function() {
    var options = {
        //compress css to inline in style tags
        compress: true
    };
    return gulp.src('working/*.html')
        //Add styles in style tags for responsive media queries
        .pipe(inlinesource(options))
        .pipe(inlineCss({
                applyStyleTags: true,
                applyLinkTags: true,
                removeStyleTags: false,
                removeLinkTags: false, // dont remove links, yet
                preserveMediaQueries: true
        }))
        .pipe(rename({
            suffix: "-inline",
        }))
        .pipe(gulp.dest('dist/'));
});

// Task: Default - running gulp inlines the email
// This is useful if you have to make edits to the working copy once you are using the file in dist
gulp.task('default', [ 'inline' ]);