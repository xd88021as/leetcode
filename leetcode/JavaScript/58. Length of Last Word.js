/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.trim().replace(/\s+/g, ' ').split(' ')
  return str.pop().length
};