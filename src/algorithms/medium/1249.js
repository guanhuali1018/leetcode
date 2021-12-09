// 1249. Minimum Remove to Make Valid Parentheses
// https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/

const minRemoveToMakeValid = (s) => {
  const stack = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      stack.push(i)
    }
    if (s[i] === ')') {
      if (stack.length > 0 && s[stack[stack.length - 1]] === '(') {
        stack.pop()
      } else {
        stack.push(i)
      }
    }
  }

  const result = s.split('')
  while (stack.length > 0) {
    const index = stack.pop()
    result.splice(index, 1)
  }
  return result.join('')
}
