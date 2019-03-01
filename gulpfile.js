var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var cssnano = require('gulp-cssnano');
var images = require('gulp-imagemin');

gulp.task('sass',function(){
	return gulp.src("./src/css/*.scss").pipe(sass()).pipe(rename({"suffix" : ".min"}))
	.pipe(cssnano())
	.pipe(gulp.dest('dist/css'));
})
gulp.task('default',function(){
	gulp.watch('./src/css/*.scss',['sass']);
})
gulp.task('img',function(){
	return gulp.src("./src/img/*").pipe(images()).pipe(gulp.dest("dist/img"));
})
//gulp.task('default',function(){
//	gulp.watch('./src/img/*',['img']);
//})