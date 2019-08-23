/* eslint-disable */
const merge = require('webpack-merge');
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Configs
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => {
  return merge([
    {
      optimization: {
        // runtimeChunk: 'single',
        // splitChunks: {
        //   cacheGroups: {
        //     vendor: {
        //       test: /[\\/]node_modules[\\/]/,
        //       name: 'vendors',
        //       chunks: 'all'
        //     }
        //   }
        // },
        minimizer: [new UglifyJsPlugin()],
      },
      plugins: [
        new MiniCssExtractPlugin(),
        new Visualizer({ filename: './statistics.html' }),
        new HtmlWebpackPlugin({
          title: 'example',
          template: './src/index.html',
          filename: './index.html',
          inject: true,
          minify: {
            collapseWhitespace: true,
            collapseInlineTagWhitespace: true,
            minifyCSS: true,
            minifyURLs: true,
            minifyJS: true,
            removeComments: true,
            removeRedundantAttributes: true
          }
        })
      ],
    },
  ]);
}

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
}