// 3. Longest Substring Without Repeating Characters
// https://leetcode.com/problems/longest-substring-without-repeating-characters/

// const lengthOfLongestSubstring = (s) => {
//   if (s === '') return 0
//   const lastSeen = {}
//   let longest = [0, 1]
//   let startIdx = 0
//   for (let i = 0; i < s.length; i++) {
//     const char = s[i]
//     if (char in lastSeen) startIdx = Math.max(startIdx, lastSeen[char] + 1)
//     if (longest[1] - longest[0] < i + 1 - startIdx) longest = [startIdx, i + 1]
//     lastSeen[char] = i
//   }
//   return longest[1] - longest[0]
// }

function lengthOfLongestSubstring(s) {
  if (s.length === 0) return 0
  let start = 0
  let longest = 1
  const hashT = {}
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (char in hashT && start <= hashT[char]) start = hashT[char] + 1
    longest = Math.max(longest, i - start + 1)
    hashT[char] = i
  }
  return longest
}
