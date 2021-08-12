// 198. House Robber
// https://leetcode.com/problems/house-robber/

const rob = (nums) => {
  if (nums.length === 0) return 0
  if (nums.length === 1) return nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (i === 1) {
      nums[1] = Math.max(nums[0], nums[1])
    } else {
      nums[i] = Math.max(nums[i - 1] + nums[i], nums[i])
    }
  }
  return nums[nums.length - 1]
}
