// 15. 3Sum
// https://leetcode.com/problems/3sum/

const threeSum = (nums) => {
  nums.sort((a, b) => a - b)
  const result = []
  for (let i = 0; i < nums.length - 2; i++) {
    const currentNum = nums[i]
    if (currentNum > 0) break // attention
    if (i > 0 && nums[i - 1] === currentNum) continue // attention
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = currentNum + nums[left] + nums[right]
      if (sum === 0) {
        result.push([currentNum, nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left - 1] === nums[left]) left++ // attention
        while (left < right && nums[right + 1] === nums[right]) right-- // attention
      }
      if (sum < 0) left++
      if (sum > 0) right--
    }
  }
  return result
}
