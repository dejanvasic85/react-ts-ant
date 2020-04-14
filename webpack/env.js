const { DEBUG, NODE_ENV, BRANCH_NAME } = process.env;

const isDevEnvironment = NODE_ENV !== 'production';

//  CSS-Module className local identity
const localIdentName = isDevEnvironment ? '[name]__[local]--[hash:base64:5]' : '[hash:base64:5]';

module.exports = {
  cssBundleLocation: 'assets/css',
  excludedFolders: /node_modules/,
  imageBundleLocation: 'assets/images',
  isAnalyzeEnvironment: DEBUG === 'analyze',
  isDevEnvironment,
  jsBundleLocation: 'assets/js',
  localIdentName,
  port: 3000,
  publicPath: '/',
  templateVars: {
    BRANCH_NAME: BRANCH_NAME || 'master',
  },
};
