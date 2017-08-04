module.exports = function (grunt) {
  return {
    dist: {
      files: {
        'dist/<%= package.name %>.min.js': 'dist/<%= package.name %>.js'
      }
    }
  }
};
