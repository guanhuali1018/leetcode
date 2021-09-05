// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

const maxProfit = (prices) => {
  let rightMax = 0
  let result = 0
  for (let i = prices.length - 1; i >= 0; i--) {
    result = Math.max(result, rightMax - prices[i])
    rightMax = Math.max(rightMax, prices[i])
  }
  return result
}
