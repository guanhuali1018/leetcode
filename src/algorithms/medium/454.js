// 454. 4Sum II
// https://leetcode.com/problems/4sum-ii/

var fourSumCount = function (A, B, C, D) {
  let map = {}
  let res = 0
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      let sum = C[i] + D[j]
      map[sum] = map[sum] + 1 || 1
    }
  }

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      res += map[-1 * (A[i] + B[j])] || 0
    }
  }

  return res
}
