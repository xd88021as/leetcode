/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  if (obstacleGrid[0][0]) {
    return 0
  }
  let row = obstacleGrid.length
  let col = obstacleGrid[0].length
  const dp = new Array(row).fill(0).map(() => new Array(col).fill(0))
  let blocked = false
  for (let i = 0; i < row; i++) {
    if (obstacleGrid[i][0] || blocked) {
      dp[i][0] = 0
      blocked = true
    } else {
      dp[i][0] = 1
    }
  }
  blocked = false
  for (let j = 0; j < col; j++) {
    if (obstacleGrid[0][j] || blocked) {
      dp[0][j] = 0
      blocked = true
    } else {
      dp[0][j] = 1
    }
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (obstacleGrid[i][j]) {
        dp[i][j] = 0
      } else {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1]
      }
    }
  }
  return dp[row - 1][col - 1]
}
