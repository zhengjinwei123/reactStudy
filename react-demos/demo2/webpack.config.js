let Path = require("path");
let Webpack = require("webpack");
let HtmlWebpackPlugin = require("html-webpack-plugin"); //根据模板文件创建服务于webpack bundle的html 文件
let ExtractTextPlugin = require("extract-text-webpack-plugin");// 用于将css样式从js中抽离出来
let OpenBrowserPlugin = require("open-browser-webpack-plugin");// 当webpack 加载完毕自动在浏览器中打开页面

// 此脚本基于webpack1 ，webpack2 请参考官网
module.exports = {
    entry: Path.join(__dirname,'app/index.jsx'), //webpack 运行入口点

    //定义输出目标
    output:{
        path: __dirname + '/build',
        filename: 'bundle.js'
    },
    //定义模块简写匹配规则
    resolve:{
        extensions:['','.js','.jsx']
    },
    module:{
        loaders:[
            {
                test:/\.(js|jsx)$/,
                exclude:/node_modules/,
                loader:'babel'
            },
            {
                test:/\.less$/,
                exclude:/node_modules/,
                loader:'style!css!postcss!less'
            },
            {
                test:/\.css$/,
                exclude:/node_modules/,
                loader:'style!css!postcss'
            },
            {
                test:/\.(png|gif|jpg|jpeg|bmp)$/i,
                loader:'url-loader?limit=5000'
            },
            {
                test:/\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
                loader:'url-loader?limit=5000'
            }
        ]
    },
    eslint:{
        configFile: '.eslintrc'
    },
    postcss:[
        require("autoprefixer")
    ],
    plugins:[
        // html 模板插件
        new HtmlWebpackPlugin({
            template: Path.join(__dirname,"/app/index.tpl.html")
        }),
        // 热加载插件
        new Webpack.HotModuleReplacementPlugin(),
        // 打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        }),
        // 定义常量
        new Webpack.DefinePlugin({
            __DEV__: JSON.stringify(JSON.parse((procss.env.NODE_ENV === 'dev') || false))
        })
    ],
    devServer:{
        proxy:{
            '/api':{
                target: 'http://localhost:3000',
                secure: false
            }
        },
        contentBase: './public',
        colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }
};