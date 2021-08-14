// 90. Subsets II
// https://leetcode.com/problems/subsets-ii/

const subsetsWithDup = (nums) => {
  let res = []
  nums.sort((a, b) => a - b)
  helper(nums, [], res)
  return res
}

const helper = (nums, curr, res) => {
  res.push([...curr])
  for (let i = 0; i < nums.length; i++) {
    if (i === 0 || nums[i] !== nums[i - 1]) {
      const newNums = nums.slice(i + 1)
      curr.push(nums[i])
      helper(newNums, curr, res)
      curr.pop()
    }
  }
}
