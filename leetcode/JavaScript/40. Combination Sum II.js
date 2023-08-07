/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  let result = []
  let iterate = (index, target, tempCombo) => {
    if (target === 0) {
      result.push(tempCombo)
      return;
    }
    if (target < 0) {
      return;
    }
    for (let i = index; i < candidates.length; i++) {
      if (i === index || candidates[i] !== candidates[i - 1]) {
        iterate(i + 1, target - candidates[i], [...tempCombo, candidates[i]])
      }
    }
  }
  iterate(0, target, [])
  return result;
};