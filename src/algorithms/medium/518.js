// 518. Coin Change 2
// https://leetcode.com/problems/coin-change-2/

const change = (amount, coins) => {
  const ways = new Array(amount + 1).fill(0)
  ways[0] = 1
  for (let c of coins) {
    for (let a = 1; a < amount + 1; a++) {
      if (c <= a) ways[a] += ways[a - c]
    }
  }
  return ways[amount]
}
