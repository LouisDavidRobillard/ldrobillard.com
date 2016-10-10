var gulp = require('gulp');
var less = require('gulp-less');
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefix= new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('less', function() {
    gulp.src('**/*.less')
        .pipe(less({
            plugins:[autoprefix]
        }))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});

gulp.task('default', ['less'], function() {
    gulp.watch('**/*.less', ['less']);
})