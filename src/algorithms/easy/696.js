// 696. Count Binary Substrings
// https://leetcode.com/problems/count-binary-substrings/

const countBinarySubstrings = (s) => {
  let res = 0
  let left = 0
  let right = 1
  for (let i = 1; i < s.length; i++) {
    if (s[i] === s[i - 1]) {
      right++
    } else {
      left = right
      right = 1
    }
    if (left >= right) res += 1
  }

  return res
}
