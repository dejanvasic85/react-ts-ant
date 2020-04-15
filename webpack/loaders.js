const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isDevEnvironment, excludedFolders, localIdentName, imageBundleLocation, rootPath } = require('./env');

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
      modifyVars: {
        'primary-color': '#44546A',
      },
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
