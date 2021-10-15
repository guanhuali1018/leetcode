// 33. Search in Rotated Sorted Array
// https://leetcode.com/problems/search-in-rotated-sorted-array/

const search = (array, target) => {
  return helper(array, target, 0, array.length - 1)
}

const helper = (array, target, left, right) => {
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle]
    const leftNum = array[left]
    const rightNum = array[right]
    if (target === potentialMatch) {
      return middle
    } else if (leftNum <= potentialMatch) {
      if (target < potentialMatch && target >= leftNum) {
        right = middle - 1
      } else left = middle + 1
    } else {
      if (target > potentialMatch && target <= rightNum) {
        left = middle + 1
      } else right = middle - 1
    }
  }
  return -1
}
