// 78. Subsets
// https://leetcode.com/problems/subsets/

const subsets = (nums) => {
  if (nums.length === 0) return [[]]
  if (nums.length === 1) return [[], [nums[0]]]
  let out = []
  const newArr = nums.slice(1)
  const result = subsets(newArr)
  out = out.concat(result)
  for (const ele of result) {
    const item = [nums[0]]
    const temp = item.concat(ele)
    out.push(temp)
  }
  return out
}
