/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let result = "";
  let stepNumber = 0;
  if (numRows > 2) {
    stepNumber = numRows - 2;
  }
  for (let i = 0; i < numRows; i++) {
    let j = i;
    let needStep = 0;
    if (i + (1 % numRows) > 1) {
      needStep = numRows - i - 1;
    }
    while (j < s.length) {
      result += s[j];
      if (needStep > 0 && j + needStep + (numRows - i - 1) < s.length) {
        result += s[j + needStep + (numRows - i - 1)];
      }
      j = j + numRows + stepNumber;
    }
  }
  return result;
};
