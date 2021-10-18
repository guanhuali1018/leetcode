// 718. Maximum Length of Repeated Subarray
// https://leetcode.com/problems/maximum-length-of-repeated-subarray/

const findLength = function(A, B) {
  const dp = []
  for (let i = 0; i <= A.length; i++) {
    dp.push([])
    for (let j = 0; j <= B.length; j++) {
      dp[i].push(0)
    }
  }
  
  let max = 0
  
  for (let i = 1; i <= A.length; i++) {
    for (let j = 1; j <= B.length; j++) {
      if (A[i - 1] === B[j - 1]) {
        dp[i][j] = 1 + dp[i - 1][j - 1]
        max = Math.max(max, dp[i][j])
      }
    }
  }
  
  return max
}
