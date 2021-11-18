// 16. 3Sum Closest
// https://leetcode.com/problems/3sum-closest/

const threeSumClosest = (nums, target) => {
  let minDiff = Infinity
  let res = 0
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (minDiff > Math.abs(sum - target)) {
        minDiff = Math.abs(sum - target)
        res = sum
      }

      if (sum > target) {
        right--
      } else {
        left++
      }
    }
  }

  return res
}
