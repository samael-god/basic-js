const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
    let indexArr = [];
    arr = arr.filter((num, index) => {
        if (num !== -1) {
            return true;
        } else {
            indexArr.push(index);
        }
    }).sort((a, b) => a - b);
    console.log(indexArr, arr)
    indexArr.map(index => arr.splice(index, 0, -1));
    return arr;
}

module.exports = {
    sortByHeight
};
