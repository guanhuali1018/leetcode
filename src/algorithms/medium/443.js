// 443. String Compression
// https://leetcode.com/problems/string-compression/

const compress = (chars) => {
  let left = 0
  let right = 0
  let len = chars.length
  while (right < len) {
    let index = right
    while (right < len && chars[index] === chars[right]) {
      right++
    }
    let repeat = right - index
    chars[left] = chars[right - 1]
    if (repeat === 1) {
      left++
    } else if (repeat <= 9) {
      chars[left + 1] = repeat + ''
      left += 2
    } else {
      let num = repeat + ''
      for (let i = 0; i < num.length; i++) {
        chars[left + 1 + i] = num[i]
      }
      left += num.length + 1
    }
  }
  return left
}
