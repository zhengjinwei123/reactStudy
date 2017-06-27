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
    module:{
      loaders:[
          {
              test:/\.js$/,
              loader:'babel-loader',
              exclude:Path.resolve(__dirname,'./node_modules/'),
              include:Path.resolve(__dirname,'./src/'),
              query:{
                  presets:["latest"]
              }
          },
          {
              test:/\.css$/,
              use:[
                  'style-loader',
                  'css-loader',
                  {
                      loader:'postcss-loader',
                      options:{
                          plugins:[require("autoprefixer")({
                              browsers:["last 5 versions"]
                          })]
                      }
                  }
              ],
          }
      ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./index.html",
            inject: "body", // head false body
            title: "demo2"
        })
    ]
};