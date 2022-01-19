// 415. Add Strings
// https://leetcode.com/problems/add-strings/

const addStrings = (num1, num2) => {
  let resultNum = []
  let carry = 0
  let i = num1.length - 1
  let j = num2.length - 1
  while (i >= 0 || j >= 0 || carry > 0) {
    let left = i >= 0 ? num1[i] - '0' : 0
    let right = j >= 0 ? num2[j] - '0' : 0
    let sum = left + right + carry
    let num = sum % 10
    resultNum.unshift(num)
    carry = Math.floor(sum / 10)
    i--
    j--
  }
  return resultNum.join('')
}
