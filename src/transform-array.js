const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let res = [];
  if (arr instanceof Array) {
    if (arr[arr.length-1] === '--double-next' || arr[arr.length-1] === '--discard-next') {
      arr.pop();
    }
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === '--double-next') {
        res.push(arr[index+1]);
      } else if (arr[index] === '--double-prev') {
        if (res[res.length-1] !== '--discard' && res.length) {
          res.push(arr[index-1]);
        }
      } else if (arr[index] === '--discard-next') {
        res.push('--discard');
        index++;
      } else if (arr[index] === '--discard-prev') {
        if (res[res.length-1] !== '--discard') {
          res.pop();
          res.push('--discard');
        }
      } else {
        res.push(arr[index])
      }
    };
    return res.filter(item => item !== '--discard');
  } else {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }
  
}

module.exports = {
  transform
};
