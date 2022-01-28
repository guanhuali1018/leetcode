// 1710. Maximum Units on a Truck
// https://leetcode.com/problems/maximum-units-on-a-truck/

var maximumUnits = function (boxTypes, truckSize) {
  boxTypes.sort((a, b) => b[1] - a[1])
  let res = 0
  let left = truckSize
  for (const b of boxTypes) {
    if (left <= 0) break
    if (left > b[0]) {
      res += b[0] * b[1]
      left -= b[0]
    } else {
      res += left * b[1]
      break
    }
  }
  return res
}
