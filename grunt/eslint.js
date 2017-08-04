module.exports = function (grunt) {
  return {
    dist: {
      src: ['src/**/*.js', 'test/**/*.js']
    },
    fix: {
      src: ['src/**/*.js', 'test/**/*.js'],
      options: {
        fix: true
      }
    },
    dev: {
      src: ['src/**/*.js', 'test/**/*.js'],
      options: {
        rules: {
          "no-console": "off",
          "no-debugger": "off"
        }
      }
    }
  }
};
