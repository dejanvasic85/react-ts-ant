const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const InlineSourcePlugin = require('html-webpack-inline-source-plugin');

const { isDevEnvironment, isAnalyzeEnvironment, cssBundleLocation, templateVars } = require('./env');

//  Typical plugins required for both dev and prod environments
module.exports = [
  //  https://github.com/jantimon/html-webpack-plugin
  //  Webpack plugin that simplifies creation of HTML files to serve your webpack bundles
  new HtmlWebpackPlugin({
    inlineSource: 'runtime~.+\\.js',
    template: './index.html',
    favicon: 'favicon.ico',
    ...templateVars,
  }),

  //  https://github.com/dustinjackson/html-webpack-inline-source-plugin
  //  Enhances html-webpack-plugin functionality by adding the {inlineSource: 'regex string'} option.
  // new InlineSourcePlugin(),
]
  .concat(
    isDevEnvironment
      ? [
          //  https://webpack.js.org/concepts/hot-module-replacement/
          //  Hot Module Replacement (HMR) exchanges, adds, or removes
          //  modules while an application is running, without a full reload
          new webpack.HotModuleReplacementPlugin(),

          //  https://github.com/aackerman/circular-dependency-plugin
          //  Detect modules with circular dependencies when bundling with webpack.
          new CircularDependencyPlugin({
            exclude: /node_modules/,
            failOnError: false,
            cwd: process.cwd(),
          }),
        ]
      : [
          //  https://github.com/webpack-contrib/mini-css-extract-plugin
          //  This plugin extracts CSS into separate files
          new MiniCssExtractPlugin({
            filename: `${cssBundleLocation}/[name].[chunkhash:8].css`,
          }),

          //  Ensures all plugins are set to production mode
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production'),
          }),
        ],
  )
  .concat(
    isAnalyzeEnvironment
      ? [
          //  https://github.com/webpack-contrib/webpack-bundle-analyzer
          //  Generates statistics of the currently webpack production bundle, along with a
          //  visualiser at http://127.0.0.1:8888/
          new BundleAnalyzerPlugin(),
        ]
      : [],
  );
