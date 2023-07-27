/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const result = [];
  let iterate = (str, left, right) => {
    if (left > n || right > n || right > left) return;
    if (str.length === n * 2) {
      result.push(str);
      return;
    }
    iterate(str + '(', left + 1, right);
    iterate(str + ')', left, right + 1);
  };
  iterate('', 0, 0);
  return result;
};
