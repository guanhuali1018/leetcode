// 343. Integer Break
// https://leetcode.com/problems/integer-break/

var integerBreak = function (n) {
  const dp = new Array(n + 1).fill(1)
  for (let i = 3; i <= n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], Math.max(j * (i - j), j * dp[i - j]))
    }
  }
  return dp[n]
}
