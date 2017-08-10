module.exports = function (grunt) {
  return {
    all: [
      'dist',
      'dist-test',
      'coverage'
    ],
    test: ['dist-test'],
    coverage: ['coverage'],
    a:'<%= package.grunt.src %>'
  }
};
