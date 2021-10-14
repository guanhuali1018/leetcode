// 34. Find First and Last Position of Element in Sorted Array
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

const searchRange = (array, target) => {
  const result = [-1, -1]
  helper(array, target, 0, array.length - 1, result, true)
  helper(array, target, 0, array.length - 1, result, false)
  return result
}

const helper = (array, target, left, right, result, goLeft) => {
  if (left > right) return
  const mid = Math.floor((left + right) / 2)
  if (array[mid] < target) {
    helper(array, target, mid + 1, right, result, goLeft)
  } else if (array[mid] > target) {
    helper(array, target, left, mid - 1, result, goLeft)
  } else {
    if (goLeft) {
      if (mid === 0 || array[mid - 1] !== target) {
        result[0] = mid
      } else helper(array, target, left, mid - 1, result, goLeft)
    } else {
      if (mid === array.length - 1 || array[mid + 1] !== target) {
        result[1] = mid
      } else {
        helper(array, target, mid + 1, right, result, goLeft)
      }
    }
  }
}
