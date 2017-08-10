const path = require('path');

function makePath(to) {
  return [process.cwd(), path.join(__dirname, '..', to)];
}

module.exports = {
  relative: to => path.relative.apply(path, makePath(to)),
  absolute: to => path.resolve.apply(path, makePath(to))
};
