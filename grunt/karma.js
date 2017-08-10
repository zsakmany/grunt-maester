module.exports = function (grunt) {
  return {
    options: {
      logLevel: 'ERROR',
      frameworks: ['jasmine'],
      browsers: ['PhantomJS'],
      files: ['dist-test/**/*test.js']
    },
    dist: {
      reporters: ['dots'],
      singleRun: true
    },
    coverage: {
      reporters: ['coverage-allsources', 'coverage'],
      singleRun: true,
      coverageReporter: {
        dir: 'coverage',
        include: 'src/**/*.js',
        reporters: [
          {
            type: 'text'
          },
          {
            type: 'html'
          },
          {
            type: 'lcov',
            subdir: 'report-lcov/'
          }
        ]
      }
    },
    tdd: {
      reporters: ['dots'],
      singleRun: false,
      background: true
    }
  };
}
