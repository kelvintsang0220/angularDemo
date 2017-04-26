**第一阶段：** 

**_Step1_**:：Windows下载RubyInstaller进行安装，安装过程中发现可以打钩的地方请打上勾；

**_Step2_**：全局安装Gulp，命令行npm install gulp(可以百度一下cnpm，是一个淘宝的NPM镜像，可以有效避免npm需要翻墙的问题,基本需要用到npm的地方都可以改为cnpm)；

**_Step3_**：命令行cd到angularDemo后，本地安装uglify(JS代码压缩)、livereload(保存刷新)、webserver（本地服务器）、minify-css(CSS代码压缩)、sourcemap（生成map），命令行cnpm install gulp-uglify gulp-livereload gulp-webserver gulp-minify-css gulp-sourcemaps --save-dev ;

**_Step4_**：命令行输入cnpm install bower，安装本地bower；

**_Step5_**：命令行输入bower install angular，过程中可能会有版本选择，按需自行选择；

**_Step6_**：命令行gulp运行，运行后会有保存自动刷新网页，本地CSS\JS代码改变后自动压缩、本地服务器、生成map地图等功能；

**第二阶段计划**：加入karma-jasmine，protractor功能，暂未完成