/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 0 || x > Math.pow(2, 31) - 1) {
    return 0
  }
  return Math.floor(Math.sqrt(x))
}
