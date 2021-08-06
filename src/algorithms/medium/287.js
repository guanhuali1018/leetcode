// 287. Find the Duplicate Number
// https://leetcode.com/problems/find-the-duplicate-number/

const findDuplicate = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    const abs = Math.abs(nums[i])
    if (nums[abs - 1] < 0) return abs
    nums[abs - 1] *= -1
  }
  return -1
}
