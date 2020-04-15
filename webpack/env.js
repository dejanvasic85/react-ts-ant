const path = require('path');
const { DEBUG, NODE_ENV, BRANCH_NAME } = process.env;

const isDevEnvironment = NODE_ENV !== 'production';
const rootPath = path.resolve(__dirname, './../');

//  CSS-Module className local identity
const localIdentName = isDevEnvironment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]';
const excludedFolders = /node_modules/;

module.exports = {
  cssBundleLocation: 'assets/css',
  excludedFolders,
  imageBundleLocation: 'assets/images',
  isAnalyzeEnvironment: DEBUG === 'analyze',
  isDevEnvironment,
  jsBundleLocation: 'assets/js',
  localIdentName,
  port: 3000,
  publicPath: '/',
  rootPath,
  templateVars: {
    BRANCH_NAME: BRANCH_NAME || 'master',
  },
};
