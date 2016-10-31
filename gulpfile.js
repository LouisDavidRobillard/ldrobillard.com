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
            'app/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('copy_vendors', function () {
        gulp.src([
            'node_modules/angular/angular.min.js',
            'node_modules/angular/angular.min.js.map',
            'node_modules/angular-fullpage.js/angular-fullpage.min.js',
            'node_modules/fullpage.js/dist/jquery.fullpage.min.css',
            'node_modules/fullpage.js/dist/jquery.fullpage.min.css.map'
            ])
        .pipe(gulp.dest('vendor'));
});

gulp.task('default', ['less', 'copy_vendors', 'compress'], function() {
    gulp.watch('**/*.less', ['less']);
    gulp.watch('app/**/*.js', ['compress']);
});