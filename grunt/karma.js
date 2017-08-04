module.exports = function (grunt) {
  return {
    options: {
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      files: ['dist-test/**/*test.js']
    },
    coverage: {
      logLevel: 'ERROR',
      reporters: ['coverage'],
      singleRun: true,
      coverageReporter: {
        dir: 'coverage',
        reporters: [
          {
            type: 'text'
          },
          {
            type: 'html'
          }
        ]
      }
    },
    tdd: {
      reporters: ['dots'],
      watch: true
    },
    dist: {
      logLevel: 'INFO',
      reporters: ['dots'],
      singleRun: true
    },
    continuous: {
      logLevel: 'ERROR',
      reporters: ['dots', 'coverage'],
      singleRun: true,
      coverageReporter: {
        type: 'lcov',
        subdir: 'report-lcov/'
      }
    }
  };
}
