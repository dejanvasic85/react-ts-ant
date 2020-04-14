const path = require('path');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { isDevEnvironment, excludedFolders, localIdentName, imageBundleLocation } = require('./env');

const getFullHashedUrl = (file) => `${file}/[name].[hash:8].[ext]`;

const cssLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName,
      },
      importLoaders: 3,
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
    options: {
      javascriptEnabled: true,
    },
  },
];

module.exports = [
  {
    test: /\.ts(x?)$/,
    exclude: excludedFolders,
    use: {
      loader: 'ts-loader',
    },
  },
  {
    test: /\.less?$/,
    exclude: excludedFolders,
    loader: isDevEnvironment ? ['style-loader', ...cssLoaders] : [MiniCssExtractPlugin.loader, ...cssLoaders],
  },
  {
    test: /\.svg?$/,
    oneOf: [
      {
        include: path.resolve(__dirname, '../node_modules/seek-style-guide'),
        loader: [
          {
            loader: 'raw-loader',
            options: { name: getFullHashedUrl(imageBundleLocation) },
          },
          'svgo-loader',
        ],
      },
      {
        exclude: /node_modules/,
        loader: [
          {
            loader: 'file-loader',
            options: { name: getFullHashedUrl(imageBundleLocation) },
          },
        ],
      },
    ],
  },
  {
    test: /\.(jpg|png)?$/,
    exclude: /node_modules/,
    loader: [
      {
        loader: 'file-loader',
        options: { name: getFullHashedUrl(imageBundleLocation) },
      },
    ],
  },
];
