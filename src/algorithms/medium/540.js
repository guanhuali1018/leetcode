// 540. Single Element in a Sorted Array
// https://leetcode.com/problems/single-element-in-a-sorted-array/

// 二分查找，包含一个数的一边个数一定是奇数个
const singleNonDuplicate = function (nums) {
  if (nums.length === 1) return nums[0]

  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
      return nums[mid]
    } else {
      if (mid % 2 === 0) {
        nums[mid] === nums[mid + 1] ? (left = mid + 1) : (right = mid - 1)
      } else {
        nums[mid] === nums[mid - 1] ? (left = mid + 1) : (right = mid - 1)
      }
    }
  }
}
