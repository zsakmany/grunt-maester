module.exports = function (grunt) {
  return {
    dev: {
      files: ['src/**/*.js','src/**/*.less','test/**/*.js'],
      tasks: ['devBuild'],
    }
  }
};
