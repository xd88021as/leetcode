/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  if (a.length > b.length) {
    b = '0'.repeat(a.length - b.length) + b
  } else {
    a = '0'.repeat(b.length - a.length) + a
  }
  let carry = 0
  let result = ''
  for (let i = a.length - 1; i >= 0; i--) {
    sum = parseInt(a[i]) + parseInt(b[i]) + carry
    result = (sum % 2) + result
    carry = sum >= 2 ? 1 : 0
  }
  if (carry) {
    result = '1' + result
  }
  return result
}
