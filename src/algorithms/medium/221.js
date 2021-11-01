// 221. Maximal Square
// https://leetcode.com/problems/maximal-square/

const maximalSquare = function(matrix) {
  let row = matrix.length
  let col = matrix[0].length
  let res = 0
  const dp = []
  
  for (let i = 0; i <= row; i++) {
    dp.push([])
    for (let j = 0; j <= col; j++) {
      dp[i][j] = 0
    }
  }
  
  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= col; j++) {
      if (matrix[i - 1][j - 1] === '1') {
        dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1
        res = Math.max(res, dp[i][j])
      }
    }
  }
  
  return res * res
}
