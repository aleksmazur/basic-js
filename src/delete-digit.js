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
  let res = n.toString();
  for (let i = 0; i <= n.toString().length; i++) {
    if (n.toString()[i] < n.toString()[i+1]) {
      return res = +res.substring(0, i).concat(res.substring(i+1)); 
    } 
  }
  if (+res === n) {
    return (Math.round(n / 10));
  }
}

module.exports = {
  deleteDigit
};
