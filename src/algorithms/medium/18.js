// 18. 4Sum
// https://leetcode.com/problems/4sum/

const fourSum = (nums, target) => {
  const result = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue
    for (let j = i + 1; j < nums.length - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      const currentSum = nums[i] + nums[j]
      const toFindSum = target - currentSum
      let left = j + 1
      let right = nums.length - 1
      while (left < right) {
        if (nums[left] + nums[right] === toFindSum) {
          result.push([nums[i], nums[j], nums[left], nums[right]])
          left++
          right--
          while (left < right && nums[left] === nums[left - 1]) left++
          while (left < right && nums[right] === nums[right + 1]) right--
        }
        if (nums[left] + nums[right] > toFindSum) right--
        if (nums[left] + nums[right] < toFindSum) left++
      }
    }
  }
  return result
}
