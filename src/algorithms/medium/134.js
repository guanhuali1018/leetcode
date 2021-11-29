// 134. Gas Station
// https://leetcode.com/problems/gas-station/

const canCompleteCircuit = (gas, cost) => {
  let total = 0
  let sum = 0
  let start = 0

  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i]
    sum += gas[i] - cost[i]
    if (sum < 0) {
      start = i + 1
      sum = 0
    }
  }
  return total < 0 ? -1 : start
}
