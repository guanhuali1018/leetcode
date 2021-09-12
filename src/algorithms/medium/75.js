// 75. Sort Colors
// https://leetcode.com/problems/sort-colors/

const sortColors = (nums) => {
  const countsOfValue = [0, 0, 0]
  for (const n of nums) {
    if (n === 0) countsOfValue[0]++
    if (n === 1) countsOfValue[1]++
    if (n === 2) countsOfValue[2]++
  }
  for (let i = 0; i < countsOfValue[0]; i++) {
    nums[i] = 0
  }
  for (let i = countsOfValue[0]; i < countsOfValue[0] + countsOfValue[1]; i++) {
    nums[i] = 1
  }
  for (let i = countsOfValue[0] + countsOfValue[1]; i < nums.length; i++) {
    nums[i] = 2
  }
  return nums
}
