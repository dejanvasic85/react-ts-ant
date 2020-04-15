const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { isDevEnvironment, excludedFolders, imageBundleLocation } = require('./env');
const { antStyleLoaders, cssStyleLoaders } = require('./cssLoaders');
const getFullHashedUrl = (file) => `${file}/[name].[hash:8].[ext]`;

module.exports = [
  {
    test: /\.ts(x?)$/,
    exclude: excludedFolders,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/typescript'],
        plugins: [
          'transform-class-properties',
          ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        ],
      },
    },
  },
  {
    test: /antd.*\.less$/,
    loader: isDevEnvironment ? ['style-loader', ...antStyleLoaders] : [MiniCssExtractPlugin.loader, ...antStyleLoaders],
  },
  {
    test: /\.less?$/,
    exclude: excludedFolders,
    loader: isDevEnvironment ? ['style-loader', ...cssStyleLoaders] : [MiniCssExtractPlugin.loader, ...cssStyleLoaders],
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
