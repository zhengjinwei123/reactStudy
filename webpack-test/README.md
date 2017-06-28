# webpack 入门

> webpack 是一种前端打包集成工具,拥有良好的生态,并在持续维护中。webpack 目标是解决前端开发和维护的复杂性

#### 参考

[官网](http://webpack.github.io/)

#### 配置项

> webpack 上手很容易，但必须弄清楚它的配置和在自己的项目中的灵活运用，下面是一个实际项目中的 `webpack.config.js` 配置内容。

``` javascript
const Path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");// 解析html
const WebPack = require("webpack");
const marked = require("marked");// markdown 解析器
const renderer = new marked.Renderer();// markdown 渲染

module.exports = {
    //入口点
    entry: {
        main: "./src/app.js",
    },
    //输出
    output: {
        path: Path.resolve(__dirname, './dist'), //webpack3.0必须指定绝对路径 ，低级版本可以指定相对路径
        filename: 'js/[name].bundle.js',
    },
    //模块依赖
    module: {
        // 加载器
        loaders: [
            {
                test: /\.js$/,//当匹配到.js结尾的文件时用babel-loader解析
                loader: 'babel-loader',
                exclude: Path.resolve(__dirname, './node_modules/'),
                include: Path.resolve(__dirname, './src/'),
                query: {
                    presets: ["latest"] // 解析最近的所有支持的js功能(例如es6,es7等特性)
                }
            },
            {
                test: /\.css$/, //当匹配到css文件时，先用postcss-loader解析，然后再用css-loader解析
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 //指定引入几个loader来处理import调用的资源
                        }
                    },
                    {
                        loader:'postcss-loader', // 这个loader用于解析浏览器需要兼容的css元素
                        options: {
                            config:{
                                path:Path.resolve(__dirname,"./postcss.config.js") //读取这个配置文件中的配置来解析
                            }
                        }
                    }
                ],
            },
            {
                test:/\.less$/,//解析less文件
                loaders:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.scss$/,//解析sass文件
                loaders:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.html$/,//解析html
                loader:'html-loader'
            },
            {
                test:/\.tpl$/,//解析ejs模板文件
                loader:'ejs-loader'
            },
            // {
            //     test:/\.(png|gif|jpg|svg)$/i,
            //     loader:'file-loader'
            // },
            {
                test:/\.(png|gif|jpg|svg)$/,//解析图片资源文件，将代码中引用的相对路径自动转换中最终文件生成所在的路径
                loaders:[
                    {
                        loader: 'url-loader',
                        query:{
                            limit:8192,//当文件大小超过这个值(kb)是，以base64格式在页面中展示,减少网络请求
                            name:"images/[hash:8].[name].[ext]" //文件命名规则
                        }
                    },
                    "image-webpack-loader"  //用于压缩图片资源文件
                ],
            },
            {
                test:/\.md$/, //解析md结尾的markdown文件，先使用markdown-loader 解析，然后使用html-loader解析成html文件
                loaders:[
                    "html-loader",
                    {
                        loader:'markdown-loader',
                        options: {
                            pedantic: true,
                            renderer
                        }
                    }
                ],

            }
        ]
    },
    //插件，用于生成最终的html文件
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html", //目标文件名
            template: "./index.tpl", //模板文件名
            inject: "body", // head false body 指定脚本插入位置
            title: "demo2"  // 模板变量
        })
    ]
};
```
