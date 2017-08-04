module.exports = function (grunt) {
  return {
    dev: {
      files: ['src/**/*.js','test/**/*.js'],
      tasks: ['devBuild'],
    }
  }
};
