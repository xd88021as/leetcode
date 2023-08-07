/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (n == 0)
    return 1;
  if (n < 0)
    return myPow(1 / x, -n)
  if (n % 2 == 0) {
    let h = myPow(x, n / 2);
    return h * h;
  }
  else {
    let h = myPow(x, (n - 1) / 2)
    return x * h * h;
  }
};