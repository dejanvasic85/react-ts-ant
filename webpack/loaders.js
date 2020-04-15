const fs = require('fs');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const lessToJs = require('less-vars-to-js');

const { isDevEnvironment, excludedFolders, localIdentName, imageBundleLocation, rootPath } = require('./env');

const themeFile = fs.readFileSync(`${rootPath}/src/styles/theme.less`, 'utf-8');
const modifyVars = lessToJs(themeFile, { resolveVariables: true, stripPrefix: true });

const getFullHashedUrl = (file) => `${file}/[name].[hash:8].[ext]`;

const antCssLoaders = [
  {
    loader: 'css-loader',
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer()],
    },
  },
  {
    loader: 'less-loader',
    options: {
      javascriptEnabled: true,
      modifyVars,
    },
  },
];

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName,
      },
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [autoprefixer()],
    },
  },
  {
    loader: 'less-loader',
  },
];

module.exports = [
  {
    test: /\.ts(x?)$/,
    exclude: excludedFolders,
    loader: 'babel-loader',
  },
  {
    test: /antd.*\.less$/,
    loader: isDevEnvironment ? ['style-loader', ...antCssLoaders] : [MiniCssExtractPlugin.loader, ...antCssLoaders],
  },
  {
    test: /\.less?$/,
    exclude: excludedFolders,
    loader: isDevEnvironment ? ['style-loader', ...cssLoaders] : [MiniCssExtractPlugin.loader, ...cssLoaders],
  },
  {
    test: /\.svg?$/,
    exclude: excludedFolders,
    loader: [
      {
        loader: 'file-loader',
        options: { name: getFullHashedUrl(imageBundleLocation) },
      },
    ],
  },
  {
    test: /\.(jpg|png)?$/,
    exclude: excludedFolders,
    loader: [
      {
        loader: 'file-loader',
        options: { name: getFullHashedUrl(imageBundleLocation) },
      },
    ],
  },
];
