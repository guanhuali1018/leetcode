// 581. Shortest Unsorted Continuous Subarray
// https://leetcode.com/problems/shortest-unsorted-continuous-subarray/

const isOutOfOrder = (i, nums) => {
  if (i === 0) return nums[i] > nums[i + 1]
  if (i === nums.length - 1) return nums[i] < nums[i - 1]
  return nums[i] > nums[i + 1] || nums[i] < nums[i - 1]
}

const findUnsortedSubarray = (nums) => {
  let minOutOfOrder = Infinity
  let maxOutOfOrder = -Infinity

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (isOutOfOrder(i, nums)) {
      minOutOfOrder = Math.min(minOutOfOrder, num)
      maxOutOfOrder = Math.max(maxOutOfOrder, num)
    }
  }

  if (minOutOfOrder === Infinity) return 0

  let subarrayLeftIdx = 0
  while (minOutOfOrder >= nums[subarrayLeftIdx]) {
    subarrayLeftIdx++
  }

  let subarrayRightIdx = nums.length - 1
  while (maxOutOfOrder <= nums[subarrayRightIdx]) {
    subarrayRightIdx--
  }
  return subarrayRightIdx - subarrayLeftIdx + 1
}
