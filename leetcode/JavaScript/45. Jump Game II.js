/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < nums.length - 1) {
    let max = 0;
    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] + i, max)
    }
    left = right + 1;
    right = max;
    result++
  }
  return result;
};