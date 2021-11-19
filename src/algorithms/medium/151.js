// 151. Reverse Words in a String
// https://leetcode.com/problems/reverse-words-in-a-string/

const reverseWords = (s) => {
  let words = []
  let start = 0
  let end = 0
  while (start < s.length && end < s.length) {
    if (s[start] === ' ') {
      while (s[end] === ' ' && end < s.length) {
        end++
      }
      words.push(' ')
      start = end
    } else {
      while (s[end] !== ' ' && end < s.length) {
        end++
      }
      words.push(s.slice(start, end))
      start = end
    }
  }
  reverseArr(words)
  return words.join('').trim()
}

const reverseArr = (arr) => {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const current = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = current
  }
}
