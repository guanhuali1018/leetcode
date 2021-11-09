// 547. Number of Provinces
// https://leetcode.com/problems/number-of-provinces/

const findCircleNum = function(M) {
  if (!M) return 0
  
  let res = 0
  
  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < M.length; j++) {
      if (M[i][j] === 1) {
        res++
        dfs(M, M.length, i, j)
      }
    }
  }
  
  return res
  
  function dfs(M, n, i, j) {
    if (M[i][j] !== 1) return
    
    M[i][j] = 0
    
    for (let k = 0; k < n; k++) {
      if (M[j][k] === 1) {
        dfs(M, n, j, k)
      }
    }
  }
}
