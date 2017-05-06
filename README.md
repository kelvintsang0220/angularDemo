**第一阶段：** 

**_Step1_**：安装Gulp，命令行npm install gulp(可以百度一下cnpm，是一个淘宝的NPM镜像，可以有效避免npm需要翻墙的问题,基本需要用到npm的地方都可以改为cnpm)；

**_Step2_**：命令行cd到angularDemo后，本地安装uglify(JS代码压缩)、livereload(保存刷新)、webserver（本地服务器）、minify-css(CSS代码压缩)、sourcemap（生成map），命令行cnpm install gulp-uglify gulp-livereload gulp-webserver gulp-clean-css gulp-sourcemaps --save-dev ;

**_Step3_**：命令行gulp运行，运行后会有保存自动刷新网页，本地CSS\JS代码压缩、本地服务器、生成map地图等功能；

**第二阶段计划**：加入karma-jasmine，protractor功能，暂未完成