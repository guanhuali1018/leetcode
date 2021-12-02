// 131. Palindrome Partitioning
// https://leetcode.com/problems/palindrome-partitioning/

var partition = function (s) {
  let res = []
  helper(s, [])
  return res

  function helper(s, prefix) {
    if (s.length === 0) {
      res.push(prefix.slice())
      return
    }

    for (let i = 0; i < s.length; i++) {
      let sub = s.substring(0, i + 1)
      if (isPalindrome(sub)) {
        prefix.push(sub)
        helper(s.substring(i + 1), prefix)
        prefix.pop()
      }
    }
  }

  function isPalindrome(s) {
    let left = 0
    let right = s.length - 1
    while (left < right) {
      if (s[left] !== s[right]) return false
      left++
      right--
    }
    return true
  }
}
