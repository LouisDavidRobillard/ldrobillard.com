var gulp = require('gulp'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('less', function() {
    gulp.src('**/*.less')
        .pipe(less({
            plugins:[autoprefix]
        }))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('compress', function () {
        gulp.src([
            'app/**/*.module.js',
            'app/**/*.route.js',
            'app/**/*.run.js',
            'app/**/*.component.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'))
  ;
});

gulp.task('default', ['less', 'compress'], function() {
    gulp.watch('**/*.less', ['less']);
    gulp.watch('app/**/*.js', ['compress']);
});