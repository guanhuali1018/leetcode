// 224. Basic Calculator
// https://leetcode.com/problems/basic-calculator/

const calculate = (s) => {
  let res = 0
  let sign = 1
  let size = s.length
  let stack = []
  for (let i = 0; i < size; i++) {
    const c = s[i]
    if (c > '0') {
      let num = 0
      while (i < size && s[i] >= '0') {
        num = 10 * num + (s[i++] - '0')
      }
      res += sign * num
      i--
    } else if (c === '+') {
      sign = 1
    } else if (c === '-') {
      sign = -1
    } else if (c === '(') {
      stack.push(res)
      stack.push(sign)
      res = 0
      sign = 1
    } else if (c === ')') {
      res *= stack.pop()
      res += stack.pop()
    }
  }
  return res
}
