// 67. Add Binary
// https://leetcode.com/problems/add-binary/

const addBinary = function (a, b) {
  let res = ''
  let i = a.length - 1
  let j = b.length - 1
  let carry = 0

  while (i >= 0 || j >= 0) {
    let sum = carry
    if (i >= 0) sum += a[i] - '0'
    if (j >= 0) sum += b[j] - '0'
    res = res + (sum % 2)
    carry = Math.floor(sum / 2)

    i--
    j--
  }
  if (carry !== 0) res = res + carry
  return res.split('').reverse().join('')
}
