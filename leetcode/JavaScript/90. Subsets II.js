/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  let result = []
  nums.sort((a, b) => a - b)
  let iterate = (arr, curr) => {
    result.push([...curr])
    for (let i = 0; i < arr.length; i++) {
      if (i === 0 || arr[i] != arr[i - 1]) {
        curr.push(arr[i])
        iterate(arr.slice(i + 1), curr)
        curr.pop()
      }
    }
  }
  iterate(nums, [])
  return result
}
