// 896. Monotonic Array
// https://leetcode.com/problems/monotonic-array/

const isMonotonic = function (nums) {
  let increasing = true
  let decreasing = true

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] > 0) decreasing = false
    if (nums[i] - nums[i - 1] < 0) increasing = false
  }
  return increasing || decreasing
}
