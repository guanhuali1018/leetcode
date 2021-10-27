// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
  const result = new Array(nums.length).fill(1)
  let leftRunningProduct = 1
  let rightRunningProduct = 1

  for (let i = 0; i < nums.length; i++) {
    result[i] = leftRunningProduct
    leftRunningProduct = leftRunningProduct * nums[i]
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightRunningProduct
    rightRunningProduct *= nums[i]
  }

  return result
}
