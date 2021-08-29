// 387. First Unique Character in a String
// https://leetcode.com/problems/first-unique-character-in-a-string/

const firstUniqChar = (s) => {
  const hashT = {}
  for (const c of s) {
    if (!(c in hashT)) hashT[c] = 0
    hashT[c]++
  }
  for (let i = 0; i < s.length; i++) {
    if (s[i] in hashT && hashT[s[i]] === 1) return i
  }
  return -1
}
