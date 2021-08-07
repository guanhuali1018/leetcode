// 509. Fibonacci Number
// https://leetcode.com/problems/fibonacci-number/

const fib = (n) => {
  const lastTwo = [0, 1]
  let counter = 2
  while (n >= counter) {
    const nextFib = lastTwo[0] + lastTwo[1]
    lastTwo[0] = lastTwo[1]
    lastTwo[1] = nextFib
    counter++
  }
  if (n === 0) return 0
  return lastTwo[1]
}
