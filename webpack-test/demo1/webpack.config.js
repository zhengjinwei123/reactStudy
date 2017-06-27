const Path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebPack = require("webpack");

module.exports = {
    entry: {
        main: "./src/script/main.js",
        a: "./src/script/a.js",
        b: "./src/script/b.js",
        c: "./src/script/c.js"
    },
    output: {
        path: Path.resolve(__dirname + '/dist'),
        filename: 'js/[name].bundle.js',
        // publicPath: "http://cdn.com/"
    },
    plugins: [
        // new WebPack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            filename: "a.html",
            template: "./index.html",
            inject: false, // head false body
            title: "zjw a",
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true
            // },
            // chunks:[
            //     "main","a"
            // ],
            excludeChunks:["b","c"]
        }),
        new HtmlWebpackPlugin({
            filename: "b.html",
            template: "./index.html",
            inject: false, // head
            title: "zjw b",
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true
            // },
            // chunks:["b"],
            excludeChunks:["a","c"]
        }),
        new HtmlWebpackPlugin({
            filename: "c.html",
            template: "./index.html",
            inject: false, // head
            title: "zjw c",
            // minify: {
            //     removeComments: true,
            //     collapseWhitespace: true
            // },
            // chunks:["c"],
            excludeChunks:["a","b"]
        })
    ]
};