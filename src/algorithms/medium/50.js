// 50. Pow(x, n)
// https://leetcode.com/problems/powx-n/

// 暴力解超时 O(n)
// var myPow = function(x, n) {
//     const pow = Math.abs(n)
//     if (n === 0) return 1
//     if (x === 0 || x === 1) return x

//     let res = x
//     for (let i = 0; i < pow - 1; i++) {
//         res *= x
//     }
//     if (n < 0) res = 1 / res
//     return res
// };

// 递归 O(nlogn)
function myPow(x, n) {
  if (n === 0) return 1

  let pow = Math.abs(n)
  let res
  if (pow % 2 === 0) {
    res = myPow(x * x, pow / 2)
  } else {
    res = myPow(x * x, (pow - 1) / 2) * x // 最后补一次x
  }
  return n < 0 ? 1 / res : res
}
