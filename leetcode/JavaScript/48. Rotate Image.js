/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix.length; j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[j][i]
      matrix[j][i] = temp
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (j = 0; j < Math.floor(matrix.length / 2); j++) {
      const temp = matrix[i][j]
      matrix[i][j] = matrix[i][matrix.length - 1 - j]
      matrix[i][matrix.length - 1 - j] = temp
    }
  }
  return matrix
};