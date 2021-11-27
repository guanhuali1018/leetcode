// 139. Word Break
// https://leetcode.com/problems/word-break/

// DFS:
// var wordBreak = function(s, wordDict) {
//     const memo = new Array(s.length).fill(true)
//     return helper(0)

//     function helper(idx) {
//         if (idx === s.length) return true

//         for (let i = idx; i < s.length; i++) {
//             const current = s.substring(idx, i + 1)
//             if (wordDict.indexOf(current) !== -1 && memo[idx]) {
//                 if (helper(i + 1)) {
//                     return true
//                 }
//             } else continue
//         }
//         memo[idx] = false
//         return false
//     }
// };

// BFS:
// function wordBreak(s, wordDict) {
//     const dic = new Set(wordDict)
//     const start = 0
//     let queue = [start]
//     const seen = new Set()
//     while (queue.length) {
//         const next = []
//         for (let idx of queue) {
//             if (seen.has(idx)) continue
//             let temp = ''
//             if (idx === s.length) return true
//             for (let i = idx; i < s.length; i++) {
//                 temp += s[i]
//                 if (dic.has(temp)) {
//                     next.push(i + 1)
//                 }
//             }
//             seen.add(idx)
//         }
//         queue = next
//     }
//     return false
// }

// DP:
const wordBreak = (s, wordDict) => {
  const dp = new Array(s.length + 1).fill(false)
  dp[0] = true
  for (let end = 1; end <= s.length; end++) {
    for (let start = 0; start < end; start++) {
      if (dp[start] && wordDict.indexOf(s.substring(start, end)) !== -1) {
        dp[end] = true
        break
      }
    }
  }
  return dp[s.length]
}
