const istanbul = require('babel-plugin-istanbul').default;
const es2015 = require('babel-preset-es2015');
const babelify = require('babelify');
const brfs = require('brfs');


module.exports = function (grunt) {
  return {
    dist: {
      files: {
        'dist/<%= package.name %>.js': ['src/**/*.js'],
        'dist-test/<%= package.name %>.test.js': ['test/**/*.js']
      },
      options: {
        transform: [
          brfs,
          [babelify, {
            presets: [es2015]
          }]
        ]
      }
    },
    devBuild: {
      files: {
        'dist/<%= package.name %>.js': ['src/**/*.js'],
        'dist-test/<%= package.name %>.test.js': ['test/**/*.js']
      },
      options: {
        transform: [
          brfs,
          [babelify, {
            presets: [es2015]
          }]
        ]
      }
    },
    coverage: {
      files: {
        'dist-test/<%= package.name %>.test.js': ['test/**/*.js']
      },
      options: {
        transform: [
          brfs,
          [babelify, {
            plugins: [istanbul],
            presets: [es2015]
          }]
        ]
      }
    }
  }
};
