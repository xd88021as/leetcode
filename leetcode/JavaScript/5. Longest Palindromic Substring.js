/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let results = "";
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    let left = i;
    let right = i;
    while (left > 0 && s[left - 1] === char) left--;
    while (right < s.length && s[right + 1] === char) {
      right++;
      i++;
    }
    while (left >= 0 && right < s.length - 1 && s[left - 1] === s[right + 1]) {
      left--;
      right++;
    }
    if (results.length < right - left + 1) results = s.slice(left, right + 1);
  }
  return results;
};
