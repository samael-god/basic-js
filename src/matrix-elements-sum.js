const {NotImplementedError} = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].length)
        for (let j = 0; j < matrix[i].length; j++) {
            if (i !== 0) {
                if (matrix[i - 1][j] === 0) {
                    matrix[i][j] = 0;
                }
            }
        }
    }
    console.log(matrix)
    return matrix.flat(1).reduce((acc, val) => acc + val);
}

module.exports = {
    getMatrixElementsSum
};
