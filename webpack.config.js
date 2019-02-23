const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist/*']),
        new HtmlWebpackPlugin({
            title: 'HMR'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
}