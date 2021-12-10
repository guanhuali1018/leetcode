// 1209. Remove All Adjacent Duplicates in String II
// https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/

const removeDuplicates = (s, k) => {
  const stack = []
  for (const c of s) {
    if (!stack.length) {
      stack.push([c, 1])
    } else if (stack[stack.length - 1][0] !== c) {
      stack.push([c, 1])
    } else if (stack[stack.length - 1][1] < k - 1) {
      stack[stack.length - 1][1] += 1
    } else stack.pop()
  }

  const result = []

  for (let i = 0; i < stack.length; i++) {
    let str = ''

    for (let j = 0; j < stack[i][1]; j++) {
      str += stack[i][0]
    }
    result.push(str)
  }
  return result.join('')
}
