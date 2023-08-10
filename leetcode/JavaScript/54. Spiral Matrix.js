/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = []
  while (matrix.length) {
    const firstElement = matrix.shift()
    result.push(...firstElement)
    for (let m of matrix) {
      const number = m.pop()
      if (number !== undefined) {
        result.push(number)
        m.reverse()
      }
    }
    matrix.reverse()
  }
  return result
};