module.exports = function (grunt) {
  return {
    dist: {
      files: {
        'dist/<%= package.name %>.css': 'src/style.less'
      }
    }
  }
};
