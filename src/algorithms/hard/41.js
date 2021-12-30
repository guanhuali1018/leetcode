// 41. First Missing Positive
// https://leetcode.com/problems/first-missing-positive/

const firstMissingPositive = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    while (
      nums[i] > 0 &&
      nums[i] <= nums.length &&
      nums[i] !== nums[nums[i] - 1]
    ) {
      swap(i, nums[i] - 1)
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i + 1) return i + 1
  }

  return nums.length + 1

  function swap(i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}
