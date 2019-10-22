const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
 
exports.default = () => (
    gulp.src('styles/main.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('styles'))
);