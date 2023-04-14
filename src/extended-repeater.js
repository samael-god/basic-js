const { NotImplementedError } = require('../extensions/index.js');

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

  if(options.addition){
    if(options.additionRepeatTimes > 1){
      for(let i = 1; i <= options.additionRepeatTimes; i++){
        options.additionSeparator ? str += options.addition + options.additionSeparator : str += options.addition + '|';

      }
    } else{
      str += options.addition;
    }
  }
  result += str;
if(options.repeatTimes){
  console.debug(result, str)
  for (let i = 1; i < options.repeatTimes; i++){
    if (options.separator){
      result += options.separator + str;
    } else{
      result += '+' + str;
    }
  }
}
console.log(result)
return  result
}

module.exports = {

  repeater
};
