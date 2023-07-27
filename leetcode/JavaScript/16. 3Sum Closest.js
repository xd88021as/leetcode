/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 1; i++) {
    let low = i + 1;
    let high = nums.length - 1;
    while (low < high) {
      let sum = nums[i] + nums[low] + nums[high];
      if (sum === target) {
        return sum;
      }
      if (sum > target) {
        high--;
      } else {
        low++;
      }
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
    }
  }
  return result;
};
