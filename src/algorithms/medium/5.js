// 5. Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = (s) => {
  let currentLongest = [0, 1]
  for (let i = 1; i < s.length; i++) {
    const odd = helper(s, i - 1, i + 1)
    const even = helper(s, i - 1, i)
    const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
    currentLongest =
      currentLongest[1] - currentLongest[0] > longest[1] - longest[0]
        ? currentLongest
        : longest
  }

  return s.slice(currentLongest[0], currentLongest[1])
}

const helper = (string, leftIdx, rightIdx) => {
  while (leftIdx >= 0 && rightIdx < string.length) {
    if (string[leftIdx] !== string[rightIdx]) break
    leftIdx--
    rightIdx++
  }
  return [leftIdx + 1, rightIdx]
}
