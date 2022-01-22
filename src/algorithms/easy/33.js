// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (nums, target) => {
  return helper(0, nums.length - 1)

  function helper(left, right) {
    while (left <= right) {
      const middleIdx = Math.floor((left + right) / 2)
      const potentialMatch = nums[middleIdx]
      const leftNum = nums[left]
      const rightNum = nums[right]
      if (target === potentialMatch) {
        return middleIdx
      } else if (rightNum >= potentialMatch) {
        // 右边已排序
        if (target > potentialMatch && target <= rightNum) {
          left = middleIdx + 1
        } else right = middleIdx - 1
      } else {
        //左边已排序
        if (leftNum <= target && target < potentialMatch) {
          right = middleIdx - 1
        } else left = middleIdx + 1
      }
    }
    return -1
  }
}
