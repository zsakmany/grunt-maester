const utils = require('./utils');

module.exports = function (grunt) {
  require('load-grunt-config')(grunt, {
    configPath: utils.absolute('grunt'),
    // overridePath: path.join(process.cwd(), 'config-' + process.env.USER),
    jitGrunt: {
      cwd: __dirname
    }
  });
};
