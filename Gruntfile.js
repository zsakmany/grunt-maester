const commonConfig = require('./commonGruntConfig/commonGruntConfig');
module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });
  commonConfig(grunt);
}