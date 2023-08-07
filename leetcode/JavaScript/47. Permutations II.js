/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  nums.sort((a, b) => a - b)
  const result = []
  let iterate = (arr, tempCombo) => {
    if (arr.length === 1) {
      result.push([...tempCombo, arr[0]])
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i - 1]) continue;
      iterate(arr.filter((num, idx) => idx !== i), [...tempCombo, arr[i]])
    }
  }
  iterate(nums, [])
  return result
};