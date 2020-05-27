const autoprefixer = require('autoprefixer');
const fs = require('fs');
const lessToJs = require('less-vars-to-js');

const { localIdentName, rootPath } = require('./env');
const themeFile = fs.readFileSync(`${rootPath}/src/styles/theme.less`, 'utf-8');
const modifyVars = lessToJs(themeFile, { resolveVariables: true, stripPrefix: true });

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [autoprefixer()],
  },
};

// Ant Design does not use CSS modules and pass the theme variables
module.exports.antStyleLoaders = [
  {
    loader: 'css-loader',
  },
  postCssLoader,
  {
    loader: 'less-loader',
    options: {
      lessOptions: {
        javascriptEnabled: true,
        modifyVars,
      },
    },
  },
];

// Here, we do USE css modules
module.exports.cssStyleLoaders = [
  {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName,
      },
    },
  },
  postCssLoader,
  {
    loader: 'less-loader',
  },
];
