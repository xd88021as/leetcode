/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let object = {}
  for (let str of strs) {
    let s = str.split('').sort().join('')
    object[s] ? object[s].push(str) : object[s] = [str]
  }
  return Object.values(object)
};