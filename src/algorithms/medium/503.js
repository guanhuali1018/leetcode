// 503. Next Greater Element II
// https://leetcode.com/problems/next-greater-element-ii/description/

const nextGreaterElements = (nums) => {
  const result = new Array(nums.length).fill(-1)
  const stack = []
  for (let i = 0; i < 2 * nums.length; i++) {
    const circularIdx = i % nums.length
    while (
      stack.length > 0 &&
      nums[stack[stack.length - 1]] < nums[circularIdx]
    ) {
      const top = stack.pop()
      result[top] = nums[circularIdx]
    }
    stack.push(circularIdx)
  }
  return result
}
