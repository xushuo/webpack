/**
 * Created by shuo on 2016/8/18.
 */
var webpack = require('webpack');
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
//定义了一些文件夹的路径
var ROOT_PATH = path.resolve('./');
var APP_PATH = path.resolve(ROOT_PATH,'app');
var BUILD_PATH = path.resolve(ROOT_PATH,'build');

module.exports = {
    //项目的文件夹 可以直接用文件夹名称，默认会找index.js 也可以确定是哪个文件名字
    entry: {
        app:path.resolve(APP_PATH,'index.js'),
        //添加要打包在venders里面的库
        vendors:['jquery','moment']
    },
    //输出文件名，合并以后js会命名为bundle.js
    output:{
        path:BUILD_PATH,
        filename: 'bundle.js'
    },
    //添加我们的插件，会自动生成一个HTML文件
    plugins:[
        //这个使用uglify压缩你的js代码
        new webpack.optimize.UglifyJsPlugin({minimize:true}),
        //把入口文件里面的数组打包成vendors.js
        new webpack.optimize.CommonsChunkPlugin('vendors','vendors.js'),
        new HtmlwebpackPlugin({
            title:'hello world app'
        })
    ],
    //显示出错代码的位置
   // devtool:'eval-source-map',
    //自动刷新浏览器，watch
    devServer:{
        historyApiFallback: true,
        hot:true,
        inline:true,
        progress:true
    },
    //配置jshint的选项，支持es6的校验
    jshint:{
        "esnext":true
    },
    module:{
        //css-loader会遍历CSS文件，并且处理。style-loader会把所有的样式插入到你页面的一个style tag中
        loaders:[
            {
                test:/\.css$/,//正则，匹配需要的CSS文件
                loaders:['style','css'],//loader处理顺序是从右到左，css-loader然后是style-loader
                include:APP_PATH
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url?limit=8142'//当图片大小小于这个限制时，就会自动启动base64编码图片
            },
            {
                test:/\.sass$/,
                loaders:['style','css','sass'],
                include:APP_PATH
            },
            {
                test:/\.jsx?$/,
                loader:'babel',
                include:APP_PATH,
                query:{
                    presets:['es2015']
                }
            }
        ],
        preLoaders:[
            {
                test:/\.jsx?$/,
                include:APP_PATH,
                loader:'jshint-loader'
            }
        ]
    }
};