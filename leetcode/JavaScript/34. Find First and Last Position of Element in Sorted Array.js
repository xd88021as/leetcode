/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      if (result.length === 0) {
        result.push(i, i)
      } else {
        result.pop()
        result.push(i)
      }
    }
  }
  if (result.length === 0) {
    result.push(-1, -1)
  }
  return result
};