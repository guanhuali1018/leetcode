// 7. Reverse Integer
// https://leetcode.com/problems/reverse-integer/

const reverse = (x) => {
  const isNegative = x < 0
  const xStrArr = Math.abs(x).toString().split('')
  const reversStr = xStrArr.reverse().join('')
  const num = Number(reversStr)
  if (isNegative && num > Math.pow(2, 31)) {
    return 0
  }
  if (!isNegative && num > Math.pow(2, 31) - 1) {
    return 0
  }
  return isNegative ? -num : num
}

function reverse1(x) {
  let rev = 0
  while (x !== 0) {
    let pop = x % 10
    x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10)
    rev = rev * 10 + pop
  }
  if (rev > 0 && rev > Math.pow(2, 31)) return 0
  if (rev < 0 && -rev > Math.pow(2, 31) - 1) return 0
  return rev
}
