// 238. Product of Array Except Self
// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = (nums) => {
  const products = new Array(nums.length).fill(1)

  let leftRunningProduct = 1
  for (let i = 0; i < nums.length; i++) {
    products[i] = leftRunningProduct
    leftRunningProduct *= nums[i]
  }

  let rightRunningProduct = 1
  for (let i = nums.length - 1; i >= 0; i--) {
    products[i] *= rightRunningProduct
    rightRunningProduct *= nums[i]
  }

  return products
}
