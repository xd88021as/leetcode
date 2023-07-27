/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const phoneButton = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  function iterate(combination, nextDigits) {
    if (nextDigits.length === 0) {
      result.push(combination);
    } else {
      for (let letter of phoneButton[nextDigits[0]]) {
        iterate(combination + letter, nextDigits.slice(1));
      }
    }
  }
  let result = [];
  if (digits) {
    iterate('', digits);
  }
  return result;
};
