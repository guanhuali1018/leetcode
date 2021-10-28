// 43. Multiply Strings
// https://leetcode.com/problems/multiply-strings/

const multiply = function(num1, num2) {
  const s1 = []
  const s2 = []
  const l1 = num1.length
  const l2 = num2.length
  const res = new Array(l1 + l2).fill('0')
  
  for (let i = 0; i < l1; i++) {
    s1.push(num1[i])
  }
  
  for (let i = 0; i < l2; i++) {
    s2.push(num2[i])
  }
  
  for (let j = l2 - 1; j >= 0; j--) {
    for (let i = l1 - 1; i >= 0; i--) {
      let product = (s1[i] - '0') * (s2[j] - '0')
      let tmp = (res[i + j + 1] - '0') + product
      res[i + j + 1] = tmp % 10 + ''
      res[i + j] = res[i + j] - '0' + parseInt(tmp / 10) + ''
    }
  }
  
  let seen = false
  let result = ''
  for (const c of res) {
    if (c === '0' && !seen) continue
    result += c
    seen = true
  }
  
  return result.length === 0 ? '0' : result
}
