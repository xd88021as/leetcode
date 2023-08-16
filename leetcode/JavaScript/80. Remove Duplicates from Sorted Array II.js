/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const len = nums.length
  let gap = 0
  for (let i = 0; i < len; i++) {
    if (nums[i] === nums[i + 2]) {
      gap++
    } else {
      nums[i - gap] = nums[i]
    }
  }
  return len - gap
}
