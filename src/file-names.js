const {NotImplementedError} = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
    for (let i = 0; i < names.length; i++) {
        if (names.slice(0, i).includes(names[i])) {
            let dupl = 1;
            while (names.slice(0, i).includes(names[i] + "(" + dupl + ")")) {
                dupl++;
            }
            names[i] += '(' + dupl + ')'
        }
    }
    return names;
}


//     names.map((name, index, names) => {
//         if (index === 0) {
//             return
//         } else {
//             let count = arr.slice(0, index + 1).filter(nm => name === nm).length;
//             if (count > 1) {
//                 arr[index] = name + '(' + (count - 1) + ')';
//                 console.log(arr);
//             }
//             return name;
//         }
//     });
//     return arr;
// }

module.exports = {
    renameFiles
};
