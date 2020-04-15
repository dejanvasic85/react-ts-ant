const path = require('path');

const rootPath = path.resolve(__dirname, './../');

module.exports = {
  'root': `${rootPath}/src/styles/root.less`,
  '@types': `${rootPath}/src/types`,
  '@constants': `${rootPath}/src/constants`,
  '@decorators': `${rootPath}/src/decorators`,
};
