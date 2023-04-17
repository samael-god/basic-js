const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
    let result = '';

    if (options.addition || typeof options.addition === "boolean" || typeof options.addition === "object") {
        if (options.additionRepeatTimes > 1) {
            for (let i = 1; i <= options.additionRepeatTimes; i++) {
                (options.additionSeparator) ? (i !== options.additionRepeatTimes) ? (str += options.addition + options.additionSeparator) : str += options.addition : (i !== options.additionRepeatTimes) ? str += options.addition + '|' : str += options.addition;
            }
        } else {
            str += options.addition;
        }
    }
    console.log(str)
    result += str;
    if (options.repeatTimes) {
        for (let i = 1; i < options.repeatTimes; i++) {
            if (options.separator) {
                result += options.separator + str;
            } else {
                result += '+' + str;
            }
        }
    }

    return result
}

module.exports = {

    repeater
};
