const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let arr = [];
  members.forEach(mem => {
    if (typeof mem === 'string') {
      arr.push(mem.trim()[0].toUpperCase());
    }
  })
  arr.sort((a, b) => {  
    return (a < b) ? -1 : (a > b) ? 1 : 0})
  return arr.join('');
}

module.exports = {
  createDreamTeam
};
