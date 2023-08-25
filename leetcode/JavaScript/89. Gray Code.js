/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = []
  for (let i = 0; i < Math.pow(2, n); i++) {
    result.push(i ^ (i >> 1))
  }
  return result
}
