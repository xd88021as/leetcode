/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const combinedArray = nums1.concat(nums2);
  combinedArray.sort((a, b) => a - b);
  const middleIndex = Math.floor(combinedArray.length / 2);
  if (combinedArray.length % 2 === 0) {
    return (combinedArray[middleIndex - 1] + combinedArray[middleIndex]) / 2;
  } else {
    return combinedArray[middleIndex];
  }
};
