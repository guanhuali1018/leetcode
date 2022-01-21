// 35. Search Insert Position
// https://leetcode.com/problems/search-insert-position/

const searchInsert = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else right = mid - 1
  }

  return target <= nums[left] ? left : left + 1
}
