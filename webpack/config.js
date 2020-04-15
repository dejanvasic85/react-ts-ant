const path = require('path');

const plugins = require('./plugins');
const loaders = require('./loaders');
// const optimization = require('./plugins');
// const alias = require('./alias');

const { isDevEnvironment, jsBundleLocation, publicPath, port, rootPath } = require('./env');

module.exports = {
  entry: './index.tsx',
  context: `${rootPath}/src`,
  mode: isDevEnvironment ? 'development' : 'production',

  ...(isDevEnvironment && {
    output: {
      path: `${rootPath}/public`,
      filename: `${jsBundleLocation}/[name].[hash:8].js`,
      publicPath: '/',
    },
    devServer: {
      port,
      historyApiFallback: true,
      disableHostCheck: true,
      overlay: true,
      open: true,
    },
    devtool: 'cheap-module-source-map',
  }),

  ...(!isDevEnvironment && {
    output: {
      path: `${rootPath}/public`,
      filename: `${jsBundleLocation}/[name].[chunkhash:8].js`,
      publicPath,
    },
    devtool: 'source-map',
    ...(!isDevEnvironment ? { stats: 'errors-only' } : null),
  }),
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.less'],

    // alias
  },
  module: {
    rules: loaders,
  },

  plugins,

  // optimization,
};
