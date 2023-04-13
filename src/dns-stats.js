const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  let result = [];

  domains.map(el => el.split('.').reverse().reduce((acc, val, i) => {
      acc += '.' + val;
      result.push(acc)
      return acc;
  }, ''));

  let obj = {};
  for (let item of result) {

    obj[item] = obj[item] ? obj[item] + 1 : 1;
      console.log(obj.keys)
  }
  console.log(obj)
return obj;
}

module.exports = {
  getDNSStats
};
