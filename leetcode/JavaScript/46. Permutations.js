/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const result = []
  let iterate = (arr, tempCombo) => {
    if (arr.length === 0) {
      result.push(tempCombo)
      return
    }
    for (let i = 0; i < arr.length; i++) {
      iterate(arr.filter((num) => num !== arr[i]), [...tempCombo, arr[i]])
    }
  }
  iterate(nums, [])
  return result
};