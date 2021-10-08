// 39. Combination Sum
// https://leetcode.com/problems/combination-sum/

var combinationSum = function (candidates, target) {
  const length = candidates.length
  const res = []
  helper(0, [], target)
  return res

  function helper(idx, prefix, target) {
    if (target === 0) res.push(prefix.slice())
    if (idx === length) return
    if (target <= 0) return

    prefix.push(candidates[idx])
    helper(idx, prefix, target - candidates[idx])
    prefix.pop()
    helper(idx + 1, prefix, target)
  }
}
