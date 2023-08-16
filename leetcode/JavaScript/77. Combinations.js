/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const result = []
  const combination = []
  let iterate = (start) => {
    if (combination.length === k) {
      result.push([...combination])
      return
    }
    for (let i = start; i <= n; i++) {
      combination.push(i)
      iterate(i + 1)
      combination.pop()
    }
  }
  iterate(1)
  return result
}
