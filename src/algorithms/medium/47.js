// 47. Permutations II
// https://leetcode.com/problems/permutations-ii/

var permuteUnique = function (nums) {
  const res = []
  nums.sort((a, b) => a - b)
  helper(nums, [])
  return res

  function helper(nums, prefix) {
    if (nums.length === 0) {
      res.push(prefix.slice())
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (i >= 1 && nums[i] === nums[i - 1]) continue
      prefix.push(nums[i])
      helper(nums.slice(0, i).concat(nums.slice(i + 1)), prefix)
      prefix.pop()
    }
  }
}
