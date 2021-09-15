// 62. Unique Paths
// https://leetcode.com/problems/unique-paths/

const uniquePaths = (m, n) => {
  if (m === 1 || n === 1) return 1
  const memo = []
  for (let i = 0; i < m; i++) {
    const temp = []
    for (let j = 0; j < n; j++) {
      if (i === 0 || j === 0) {
        temp.push(1)
      } else temp.push(0)
    }
    memo.push(temp)
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1]
    }
  }

  return memo[m - 1][n - 1]
}
