/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let low = j + 1;
      let high = nums.length - 1;
      while (low < high) {
        let sum = nums[i] + nums[j] + nums[low] + nums[high];
        if (sum === target) {
          result.push([nums[i], nums[j], nums[low], nums[high]]);
          while (nums[low + 1] === nums[low]) low++;
          while (nums[high - 1] === nums[high]) high--;
          low++;
          high--;
        } else if (sum > target) {
          high--;
        } else {
          low++;
        }
      }
      while (nums[j + 1] === nums[j]) j++;
    }
    while (nums[i + 1] === nums[i]) i++;
  }
  return result;
};
