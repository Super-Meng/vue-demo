var gulp = require('gulp')
// 引入组件
var pug         = require('gulp-pug')
var less        = require('gulp-less')
var cssauto     = require('gulp-autoprefixer')
var sourcemaps  = require('gulp-sourcemaps')
// var concat   = require('gulp-concat')
var webpack     = require('webpack')
var gulpWebpack = require('gulp-webpack')
var named       = require('vinyl-named')
var cleanCSS    = require('gulp-clean-css')
var uglify      = require('gulp-uglify')
var imagemin    = require('gulp-imagemin')
var pngcrush    = require('imagemin-pngcrush')
var cache       = require('gulp-cache')
var changed     = require('gulp-changed')
var plumber     = require("gulp-plumber")
var notify      = require("gulp-notify")
var del         = require('del')
var path        = require('path')

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
// json
gulp.task('json', function(){
	// clean
	del.sync(destDir + '/json')

	gulp.src(codeDir + '/json/**')
		.pipe(gulp.dest(destDir + '/json'))
})
// js
gulp.task('js', function(){
	// clean
	del.sync(destDir + '/build')
	// vue
	gulp.src(codeDir + '/js/**')
		.pipe(plumber({errorHandler: notify.onError("error: <%= error.message %>")}))
		.pipe(named())
		.pipe(sourcemaps.init())
		.pipe(gulpWebpack({
			watch: true,
			babel: {
				presets: ['es2015']
			},
			module: {
				loaders: [
					{ test: /\.(es6|js)$/, loader: 'babel'},
					{ test: /\.vue$/, loader: 'vue'},
					{ test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192'},
				],
			},
			devtool: 'source-map',
			// plugins: [new webpack.optimize.UglifyJsPlugin()],
			output: {
				filename: '[name].build.js',
			},
		}))
		.pipe(gulp.dest(destDir + '/build'))
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
	gulp.run('pug', 'less', 'js', 'json', 'image')
	// 监听文件变化
	gulp.watch(codeDir + '/pug/**',         ['pug'])
	gulp.watch(codeDir + '/less/**',        ['less'])
	gulp.watch(codeDir + '/js/**',          ['js'])
	gulp.watch(codeDir + '/api/**',         ['js'])
	gulp.watch(codeDir + '/store/**',       ['js'])
	gulp.watch(codeDir + '/components/**',  ['js'])
	gulp.watch(codeDir + '/json/**',        ['json'])
	gulp.watch(codeDir + '/image/**', ['image']).on('change', function(event){
		if(event.type == 'deleted'){
			var url = destDir + '/' + path.relative(codeDir, event.path)
			console.log('DELETE => ' + url)
			del.sync(url)
		}
	})
})