module.exports = function (grunt) {
  return {
    all: ['dist', 'dist-test', 'coverage'],
    test: ['dist-test'],
    coverage: ['coverage'],
    scripts: ['dist/**/*.js', 'dist-test'],
    styles: ['dist/**/*.css']
  }
};
