const {NotImplementedError} = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
    let res = [];
    for (let i = 0; i < matrix.length; i++) {
        res.push([]);

        for (let j = 0; j < matrix[i].length; j++) {

            let count = 0;

            if (i > 0) {
                (matrix[i - 1][j]) ? count++ : false;
                (matrix[i - 1][j + 1]) ? count++ : false;
                (matrix[i - 1][j - 1]) ? count++ : false;
            }
            if (i < matrix.length - 1) {
                (matrix[i + 1][j]) ? count++ : false;
                (matrix[i + 1][j + 1]) ? count++ : false;
                (matrix[i + 1][j - 1]) ? count++ : false;
            }
            (matrix[i][j + 1]) ? count++ : false;
            (matrix[i][j - 1]) ? count++ : false;
            res[i].push(count)
        }
    }
    return res;
}

module.exports = {
    minesweeper
};
