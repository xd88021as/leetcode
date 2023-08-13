/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const stack = []
  const dirs = path.split('/')
  for (let dir of dirs) {
    if (dir !== '' && dir !== '.') {
      dir === '..' ? stack.pop() : stack.push(dir)
    }
  }
  return '/' + stack.join('/')
}
