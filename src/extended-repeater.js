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
  if (options.separator === undefined) {options.separator = '+'};
  if (options.additionSeparator === undefined) {options.additionSeparator = '|'};
  let res = [];
  let arr;
  if (options.addition === null) {
    arr = [''+options.addition];
  } else {
    arr = [options.addition];
  }
  for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
    arr.push(""+options.addition); 
  }
  options.addition = arr.join(options.additionSeparator);
  console.log(options.addition)
  str += ''+options.addition; 
  for (let i = 0; i < options.repeatTimes; i++) {
    res.push(''+str); 
  }
  return options.repeatTimes ? res.join(options.separator) : str;
}

module.exports = {
  repeater
};
