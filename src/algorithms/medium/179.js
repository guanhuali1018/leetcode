// 179. Largest Number
// https://leetcode.com/problems/largest-number/

const largestNumber = function(nums) {
  let res
  nums.sort(customizeSort)
  let temp = nums.reduce((a, b) => a + '' + b)
  if (temp[0] === '0') return '0'
  return temp + ''
}

function customizeSort(a, b) {
  const s1 = a + ''
  const s2 = b + ''
  
  const addition1 = s1 + s2
  const addition2 = s2 + s1
  
  if (addition1 > addition2) {
    return -1
  }
  return 1
}
