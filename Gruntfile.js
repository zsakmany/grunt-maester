const commonConfig = require('./grunt-maester/grunt-maester');
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  commonConfig(grunt);
}
