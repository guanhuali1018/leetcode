// 809. Expressive Words
// https://leetcode.com/problems/expressive-words/

const expressiveWords = (s, words) => {
  let res = 0
  let m = s.length
  let n = words.length
  for (const word of words) {
    let i = 0
    let j = 0
    for (; i < m; i++) {
      if (j < word.length && s[i] === word[j]) {
        j++
      } else if (i > 0 && s[i] === s[i - 1] && i + 1 < m && s[i] === s[i + 1]) {
        i++
      } else if (!(i > 1 && s[i] === s[i - 1] && s[i] === s[i - 2])) {
        break
      }
    }
    if (i === m && j === word.length) res++
  }
  return res
}
