/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = []
  const combination = []
  let iterate = (start) => {
    if (start === nums.length) {
      result.push([...combination])
      return
    }
    combination.push(nums[start])
    iterate(start + 1)
    combination.pop()
    iterate(start + 1)
  }
  iterate(0)
  return result
}
