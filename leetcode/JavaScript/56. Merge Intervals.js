/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals.length) {
    return [];
  }
  intervals.sort((a, b) => a[0] - b[0]);
  const result = [intervals.shift()]
  for (let [start, end] of intervals) {
    if (result[result.length - 1][1] >= start) {
      if (result[result.length - 1][1] < end) {
        result[result.length - 1][1] = end
      }
    } else {
      result.push([start, end])
    }
  }
  return result
};