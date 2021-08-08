// 70. Climbing Stairs
// https://leetcode.com/problems/climbing-stairs/

const climbStairs = (n) => {
  if (n === 1) return 1
  if (n === 2) return 2
  if (n > 2) {
    const arr = []
    arr[0] = 1
    arr[1] = 2

    for (let i = 2; i < n; i++) {
      arr[i] = arr[i - 1] + arr[i - 2]
    }
    return arr[n - 1]
  }
}
