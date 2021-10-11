// 494. Target Sum
// https://leetcode.com/problems/target-sum/

function findTargetSumWays(nums, target) {
  let memo = {}
  return helper(target, nums.length - 1)

  function helper(target, i) {
    const token = i + '->' + target
    if (token in memo) return memo[token]
    if (i === 0) {
      if (target === 0 && nums[0] === 0) return 2
      return nums[0] === target || nums[0] === -target ? 1 : 0
    }
    memo[token] =
      helper(target + nums[i], i - 1) + helper(target - nums[i], i - 1)
    return memo[token]
  }
}
