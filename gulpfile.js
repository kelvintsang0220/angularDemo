/**
 * Created by CPS on 2017/4/25.
 */
"use strict"

var gulp = require('gulp'); // 基础库
var uglify = require('gulp-uglify'); // js压缩
var livereload = require('gulp-livereload'), // 网页自动刷新（文件变动后即时刷新页面）
    webserver = require('gulp-webserver'); // 本地服务器
var minifyCss = require('gulp-clean-css'); // CSS压缩
var sourcemaps = require('gulp-sourcemaps'); //来源地图

//css代码压缩
gulp.task('minifyCss', function() {
    return gulp.src(['app/*/*/*.CSS','app/*/*.CSS','app/*.CSS'])
        .pipe(minifyCss({keepBreaks:true}))
        .pipe(gulp.dest('./dist/'));
});

//js代码压缩
gulp.task('script', function() {
    return gulp.src(['app/*/*/*.js','app/*/*.js','app/*.js']) // 指明源文件路径、并进行文件匹配、多个路径以数组形式传入
        .pipe(uglify({ preserveComments:'some' })) // 使用uglify进行压缩，并保留部分注释
        .pipe(gulp.dest('dist/app')); // 输出路径
});
//同时执行CSS，JS代码压缩
gulp.task("minify",["minifyCss","script"]);

// 开启服务器，自动打开网页，默认目录app
gulp.task('webserver', function() {
    gulp.src( './app' )             // 服务器目录（.代表根目录） 自动寻找index.html
        .pipe(webserver({              // 运行gulp-webserver
            livereload: true,       // 启用LiveReload
            open: true              // 服务器启动时自动打开网页
        }));
});


// 监听任务,可视化编辑
gulp.task('watch',function(){
    // 监听 html
    gulp.watch(['app/*/*/*.html','app/*/*.html','app/*.html'])
    // 监听 CSS
    gulp.watch(['app/*/*/*.CSS','app/*/*.CSS','app/*.CSS']);
    // 监听 js
    gulp.watch(['app/*/*/*.js','app/*/*.js','app/*.js']);
});




// 默认任务
gulp.task('default',['webserver','watch']);