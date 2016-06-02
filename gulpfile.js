var gulp = require('gulp')
// 引入组件
var pug        = require('gulp-pug')
var less       = require('gulp-less')
var cssauto    = require('gulp-autoprefixer')
var sourcemaps = require('gulp-sourcemaps')
// var concat     = require('gulp-concat')
var webpack    = require('gulp-webpack')
var named      = require('vinyl-named')
var cleanCSS   = require('gulp-clean-css')
var uglify     = require('gulp-uglify')
var imagemin   = require('gulp-imagemin')
var pngcrush   = require('imagemin-pngcrush')
var cache      = require('gulp-cache')
var changed    = require('gulp-changed')
var plumber    = require("gulp-plumber")
var notify     = require("gulp-notify")
var del        = require('del')
var path       = require('path')

var codeDir = 'client/code'
var destDir = 'client/dest'

gulp.task('pug', function(){
	// clean
	del.sync(destDir + '/pug')
	del.sync(destDir + '/*.html')
	// 生成html
	gulp.src(codeDir + '/pug/*.pug')
		.pipe(plumber({errorHandler: notify.onError("error: <%= error.message %>")}))
		.pipe(pug({
			pretty: true
		}))
		.pipe(gulp.dest(destDir + '/'))
	// 移动html
	gulp.src(codeDir + '/pug/*.html')
		.pipe(gulp.dest(destDir + '/'))
})
// 编译Lass
gulp.task('less', function(){
	// clean
	del.sync(destDir + '/css')
	// 生成css
	gulp.src(codeDir + '/less/*.less')
		.pipe(plumber({errorHandler: notify.onError("error: <%= error.message %>")}))
		.pipe(changed(destDir + '/css'))
		// .pipe(sourcemaps.init())
		.pipe(less())
		.pipe(cssauto())
		.pipe(cleanCSS())
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest(destDir + '/css'))
	
	gulp.src(codeDir + '/less/*.css')
		.pipe(gulp.dest(destDir + '/css'))
})
// js
gulp.task('js', function(){
	// clean
	del.sync(destDir + '/js')
	// 生成js
	// gulp.src(codeDir + '/js/*.js')
	// 	.pipe(plumber({errorHandler: notify.onError("error: <%= error.message %>")}))
	// 	.pipe(changed(destDir + '/js'))
	// 	// .pipe(concat('common.js'))
	// 	// .pipe(uglify())
	// 	.pipe(gulp.dest(destDir + '/js'))
	// 生成js插件
	gulp.src(codeDir + '/js/**')
		.pipe(gulp.dest(destDir + '/js'))
	// vue
	gulp.src(codeDir + '/js/main.js')
		.pipe(named())
		.pipe(webpack({
			watch: true,
			module: {
				loaders: [
					{ test: /\.vue$/, loader: 'vue'},
					{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'},
				],
			},
			babel: {
				presets: ['es2015'],
				plugins: ['transform-runtime'],
			},
			// devtool: 'source-map',
		}))
		.pipe(gulp.dest(destDir + '/js/vue'))
})
// 压缩图片
gulp.task('image', function(){
    // 生成img
	gulp.src(codeDir + '/image/**')
		.pipe(plumber({errorHandler: notify.onError("error: <%= error.message %>")}))
		.pipe(changed(destDir + '/image'))
	    .pipe(cache(imagemin({
	        progressive: true,
	        svgoPlugins: [{removeViewBox: false}],
	        use: [pngcrush()]
	    })))
	    .pipe(gulp.dest(destDir + '/image'))
})
// 清除dest
gulp.task('clean', function(){
	del.sync(destDir)
})
// 默认任务
gulp.task('default', ['clean'], function(){
	gulp.run('pug', 'less', 'js', 'image')
	// 监听文件变化
	gulp.watch(codeDir + '/pug/**',   ['pug'])
	gulp.watch(codeDir + '/less/**',  ['less'])
	gulp.watch(codeDir + '/js/**',    ['js'])
	gulp.watch(codeDir + '/image/**', ['image']).on('change', function(event){
		if(event.type == 'deleted'){
			var url = destDir + '/' + path.relative(codeDir, event.path)
			console.log('DELETE => ' + url)
			del.sync(url)
		}
	})
})