module.exports = function (grunt) {
  return {
    dist: {
      files: {
        'dist/module.js': ['src/**/*.js']
      },
      options: {
        transform: [
          ['babelify', {
            presets: ["es2015"]
          }]
        ]
      }
    }
  }
};