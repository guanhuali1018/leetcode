// 129. Sum Root to Leaf Numbers
// https://leetcode.com/problems/sum-root-to-leaf-numbers/

var sumNumbers = function (root) {
  const nums = []
  dfs(root, 0)
  return nums.reduce((a, b) => a + b)

  function dfs(root, runningNum) {
    if (root === null) return
    if (root.left === null && root.right === null) {
      nums.push(runningNum * 10 + root.val)
      return
    }

    dfs(root.left, runningNum * 10 + root.val)
    dfs(root.right, runningNum * 10 + root.val)
  }
}
