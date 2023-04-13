const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = n.toString().split('').map(Number);
  let results = [];
  arr.map((ch, index) => {
    let subArr = arr.slice();
    subArr.splice(index, 1);
    results.push(Number(subArr.join('')))
  })
  return Math.max(...results);

}


module.exports = {
  deleteDigit
};
