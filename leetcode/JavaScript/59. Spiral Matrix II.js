/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  if (!n) {
    return []
  }
  const result = new Array(n).fill(0).map(() => new Array(n).fill(0))
  let left = 0
  let right = n - 1
  let upside = 0
  let below = n - 1
  let count = 0
  while (count < n * n) {
    for (let i = left; i <= right; i++) {
      count++
      result[upside][i] = count
    }
    upside++
    for (let i = upside; i <= below; i++) {
      count++
      result[i][right] = count
    }
    right--
    for (let i = right; i >= left; i--) {
      count++
      result[below][i] = count
    }
    below--
    for (let i = below; i >= upside; i--) {
      count++
      result[i][left] = count
    }
    left++
  }
  return result
};