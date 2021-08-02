// 977. Squares of a Sorted Array
// https://leetcode.com/problems/squares-of-a-sorted-array/

const sortedSquares = (nums) => {
  const result = new Array(nums.length).fill(0)
  let left = 0
  let right = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    const leftS = nums[left] * nums[left]
    const rightS = nums[right] * nums[right]
    if (leftS > rightS) {
      result[i] = leftS
      left++
    } else {
      result[i] = rightS
      right--
    }
  }
  return result
}
