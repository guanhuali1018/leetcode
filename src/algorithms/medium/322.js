// 322. Coin Change
// https://leetcode.com/problems/coin-change/

const coinChange = (coins, amount) => {
  const numOfCoins = new Array(amount + 1).fill(Infinity)
  numOfCoins[0] = 0
  for (const c of coins) {
    for (let a = 0; a < numOfCoins.length; a++) {
      if (c <= a) {
        numOfCoins[a] = Math.min(numOfCoins[a], numOfCoins[a - c] + 1)
      }
    }
  }
  return numOfCoins[amount] !== Infinity ? numOfCoins[amount] : -1
}
