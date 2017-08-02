const istanbul = require('babel-plugin-istanbul').default;
const es2015 = require('babel-preset-es2015');
const babelify = require('babelify').configure();


module.exports = function (grunt) {
  return {
    dist: {
      files: {
        'dist/module.js': ['src/**/*.js'],
        'dist/module.tests.js': ['test/**/*.js'],
      },
      options: {
        transform: [
          [babelify, {
            plugins: [istanbul],
            presets: [es2015]
          }]
        ]
      }
    }
  }
};