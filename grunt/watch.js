module.exports = function (grunt) {
  return {
    tdd: {
      files: [
        'src/**/*.js',
        'test/**/*.js'
      ],
      tasks: [
        'browserify:dist',
        'less:dist'
      ],
    },
    dev: {
      files: [
        'src/**/*.js',
        'src/**/*.less',
        'test/**/*.js'
      ],
      tasks: ['browserify:dist'],
    }
  }
};
