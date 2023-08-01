/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  let result = -1;
  let i = 0;
  while (result === -1 && i <= haystack.length - needle.length) {
    if (haystack.substr(i, needle.length) === needle) {
      result = i;
    }
    i++;
  }
  return result;
};
