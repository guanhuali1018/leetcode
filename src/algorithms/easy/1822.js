// 1822. Sign of the Product of an Array
// https://leetcode.com/problems/sign-of-the-product-of-an-array/

const arraySign = (nums) => {
  let sign = 1
  for (const n of nums) {
    if (n > 0) {
      if (sign !== 1) {
        sign = -1
      } else sign = 1
    } else if (n < 0) {
      if (sign !== -1) {
        sign = -1
      } else sign = 1
    } else return 0
  }

  return sign
}
