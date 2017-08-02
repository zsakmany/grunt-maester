module.exports = function (grunt) {
  return {
    options: {
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      files: ['dist/module.tests.js'],
      reporters: ['progress', 'coverage'],
      coverageReporter: {
        type: 'html',
        dir: 'coverage/'
      }
    },
    dev: {
      logLevel: 'ERROR',
      reporters: 'dots',
      singleRun: false,
      watch: true
    },
    continuous: {
      singleRun: true
    }
  };
}