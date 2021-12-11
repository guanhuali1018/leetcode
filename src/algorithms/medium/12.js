// 12. Integer to Roman
// https://leetcode.com/problems/integer-to-roman/

const intToRoman = (num) => {
  let res = ''
  if (num < 1 || num > 3999) return res
  let weight = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let token = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ]
  let i = 0
  while (num > 0) {
    if (num - weight[i] >= 0) {
      res += token[i]
      num -= weight[i]
    } else {
      i++
    }
  }
  return res
}
