// 283. Move Zeroes
// https://leetcode.com/problems/move-zeroes/

const moveZeroes = (nums) => {
  let idx = 0
  let zeroIdx = -1
  while (idx < nums.length) {
    if (nums[idx] === 0 && zeroIdx === -1) zeroIdx = idx
    if (nums[idx] !== 0 && zeroIdx !== -1) {
      nums[zeroIdx] = nums[idx]
      nums[idx] = 0
      zeroIdx++
    }
    idx++
  }
  return nums
}
