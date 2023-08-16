/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length
  const col = board[0].length
  let result = false
  let iterate = (start, x, y) => {
    if (start === word.length) {
      result = true
    }
    if (x < 0 || x > row - 1 || y < 0 || y > col - 1 || result) {
      return
    }
    if (board[x][y] !== word[start]) {
      return
    }
    board[x][y] = null
    iterate(start + 1, x - 1, y)
    iterate(start + 1, x + 1, y)
    iterate(start + 1, x, y - 1)
    iterate(start + 1, x, y + 1)
    board[x][y] = word[start]
  }
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      iterate(0, i, j)
      if (result) {
        return result
      }
    }
  }
  return result
}
