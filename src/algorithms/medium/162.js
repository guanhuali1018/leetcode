// 162. Find Peak Element
// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (i == 0 && nums[i] > nums[i + 1]) {
      return i
    } else if (i == nums.length - 1 && nums[i] > nums[i - 1]) {
      return i
    } else if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
      return i
    }
  }
  return 0
}
