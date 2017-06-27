const Path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebPack = require("webpack");

module.exports = {
    entry: {
        main: "./src/app.js",
    },
    output: {
        path: Path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: Path.resolve(__dirname, './node_modules/'),
                include: Path.resolve(__dirname, './src/'),
                query: {
                    presets: ["latest"]
                }
            },
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1 //指定引入几个loader来处理import调用的资源
                        }
                    },
                    {
                        loader:'postcss-loader',
                        options: {
                            config:{
                                path:Path.resolve(__dirname,"./postcss.config.js")
                            }
                        }
                    }
                ],
            },
            {
                test:/\.less$/,
                loaders:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test:/\.scss$/,
                loaders:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.tpl$/,
                loader:'ejs-loader'
            },
            // {
            //     test:/\.(png|gif|jpg|svg)$/i,
            //     loader:'file-loader'
            // },
            {
                test:/\.(png|gif|jpg|svg)$/,
                loaders:[
                    {
                        loader: 'url-loader',
                        query:{
                            limit:8192,
                            name:"images/[hash:8].[name].[ext]"
                        }
                    },
                    "image-webpack-loader"
                ],

            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.tpl",
            inject: "body", // head false body
            title: "demo2"
        })
    ]
};