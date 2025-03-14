const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  s2 = s2.split('');
  s1 = s1.split('');
  let count = 0;
  for (let i in s1){
    console.log(s1[i], s1, s2)
    s2.includes(s1[i]) ? count++ : false;
    s2.splice(s2.indexOf(s1[i]), 1);
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
