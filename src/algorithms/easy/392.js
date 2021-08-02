// 392. Is Subsequence
// https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
  let sIdx = 0
  let tIdx = 0
  while (sIdx < s.length && tIdx < t.length) {
    if (s[sIdx] === t[tIdx]) sIdx++
    tIdx++
  }
  return sIdx === s.length
}
