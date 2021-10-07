// 40. Combination Sum II
// https://leetcode.com/problems/combination-sum-ii/

var combinationSum2 = function (candidates, target) {
  candidates.sort((a, b) => a - b)
  const res = []
  helper(0, [], target)
  return res

  function helper(idx, prefix, target) {
    if (target === 0 && idx === candidates.length) {
      res.push(prefix.slice())
      return
    }
    if (target < 0 || idx === candidates.length) return

    prefix.push(candidates[idx])
    helper(idx + 1, prefix, target - candidates[idx])
    prefix.pop()
    if (prefix[prefix.length - 1] !== candidates[idx])
      helper(idx + 1, prefix, target)
  }
}
