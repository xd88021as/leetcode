/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let result = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[result] !== nums[i]) {
      result++;
      nums[result] = nums[i];
    }
  }
  return result + 1;
};
