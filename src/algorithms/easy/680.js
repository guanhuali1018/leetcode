// 680. Valid Palindrome II
// https://leetcode.com/problems/valid-palindrome-ii/

const validPalindrome = (s) => {
  let left = 0
  let right = s.length - 1
  while (left <= right) {
    if (s[left] === s[right]) {
      left++
      right--
    } else {
      const s1 = helper(left + 1, right)
      const s2 = helper(left, right - 1)
      if (s1 || s2) return true
      if (!s1 && !s2) return false
    }
  }
  return true

  function helper(i, j) {
    while (i <= j) {
      if (s[i] === s[j]) {
        i++
        j--
      } else return false
    }
    return true
  }
}
