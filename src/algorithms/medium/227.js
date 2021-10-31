// 227. Basic Calculator II
// https://leetcode.com/problems/basic-calculator-ii/

const calculate = (s) => {
  if (s.length === 0) return 0

  let op = '+'
  let stack = []
  let n = 0

  for (let i = 0; i <= s.length; i++) {
    let c = s[i]

    if (c === ' ') continue

    if (c >= '0' && c <= '9') {
      n = n * 10 + (c - '0')
      continue
    }

    if (op === '+') {
      stack.push(n)
    } else if (op === '-') {
      stack.push(-n)
    } else if (op === '*') {
      stack.push(stack.pop() * n)
    } else if (op === '/') {
      stack.push(Math.trunc(stack.pop() / n))
    }

    op = c
    n = 0
  }

  return stack.reduce((a, b) => a + b)
}
