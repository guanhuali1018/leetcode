// 22. Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/

const generateParenthesis = (n) => {
  let result = []
  helper(n, n, '')
  return result

  function helper(left, right, curr) {
    if (right <= 0) {
      result.push(curr)
    } else {
      if (left === right) {
        const newCurr = curr + '('
        helper(left - 1, right, newCurr)
      } else {
        if (left > 0) {
          const curr1 = curr + '('
          helper(left - 1, right, curr1)
        }
        if (right > 0) {
          const curr2 = curr + ')'
          helper(left, right - 1, curr2)
        }
      }
    }
  }
}
