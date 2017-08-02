const unit = require('./unit')();
const isItAUnit = () => unit;
function noCoverageForThisOne() {
  return 'HAHAHA';
}
module.exports = isItAUnit;