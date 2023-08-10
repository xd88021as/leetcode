/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let left = 0;
  let right = 0;
  while (right < nums.length - 1) {
    if (left > right) {
      return false
    }
    let max = 0;
    for (let i = left; i <= right; i++) {
      max = Math.max(nums[i] + i, max)
    }
    left = right + 1;
    right = max;
  }
  return true;
};