var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: [
        'webpack-hot-middleware/client?reload=true',
        './app/index',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/static/',
    },
    plugins: [
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development'),
            }
        }),
    ],
    module: {
        loaders: [
            {
                test: /(\.jsx|\.js)$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],
                exclude: /node_modules/,
                include: __dirname
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: __dirname
            },
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
        ],
    },
    resolve: {
        extensions: ['.jsx',".js", ".json"]
    },
    devtool: 'cheap-module-eval-source-map',
};
