// 58. Length of Last Word
// https://leetcode.com/problems/length-of-last-word/

const lengthOfLastWord = function(s) {
  const arr = s.split(' ')
  let res = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 0) res = arr[i].length
  }
  return res
}
