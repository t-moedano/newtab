const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    entry: './app/src/js/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'app/dist'),
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
        ],
    },
    optimization: {
        minimizer: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerWebpackPlugin(),
            '...',
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './app/src/app.html',
            filename: 'index.html',
            hash: true,
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],
    
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 3000,
    },
}