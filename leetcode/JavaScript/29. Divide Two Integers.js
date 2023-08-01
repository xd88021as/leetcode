/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend / divisor > 2147483647) {
    return 2147483647;
  }
  return parseInt(dividend / divisor);
};
