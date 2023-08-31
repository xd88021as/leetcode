/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length > 12 || s.length < 4) {
    return []
  }
  let result = []
  let iterate = (arr, curr) => {
    if (curr.length > 4) {
      return
    }
    if (arr.length === 0 && curr.length === 4) {
      result.push(curr.join('.'))
      return
    }
    for (let i = 1; i < 4; i++) {
      if (arr.length >= i) {
        let value = arr.slice(0, i)
        if ((value.length <= 1 || value[0] !== '0') && +value <= 255) {
          iterate(arr.slice(i), [...curr, value])
        }
      }
    }
  }
  iterate(s, [])
  return result
}
