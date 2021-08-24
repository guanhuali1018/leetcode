// 125. Valid Palindrome
// https://leetcode.com/problems/valid-palindrome/

const isPalindrome = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let leftIdx = 0
  let rightIdx = s.length - 1
  while (leftIdx < rightIdx) {
    if (s[leftIdx] !== s[rightIdx]) return false
    leftIdx++
    rightIdx--
  }
  return true
}
