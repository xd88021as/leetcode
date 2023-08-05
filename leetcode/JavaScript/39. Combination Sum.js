/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = []
  let iterate = (index, target, tempCombo) => {
    if (target === 0) {
      result.push([...tempCombo])
    }
    if (target < 0) {
      return
    }
    for (let i = index; i < candidates.length; i++) {
      iterate(i, target - candidates[i], [...tempCombo, candidates[i]])
    }
  }
  iterate(0, target, [])
  return result
};