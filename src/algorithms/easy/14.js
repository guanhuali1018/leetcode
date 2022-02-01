// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return ''
  let result = ''
  for (let i = 0; i < strs[0].length; i++) {
    const c = strs[0][i]
    for (let j = 1; j < strs.length; j++) {
      if (c !== strs[j][i]) return result
    }
    result += strs[0][i]
  }
  return result
}
