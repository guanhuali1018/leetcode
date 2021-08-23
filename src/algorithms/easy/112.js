// 112. Path Sum
// https://leetcode.com/problems/path-sum/

const hasPathSum = (root, targetSum) => {
  const sums = []
  helper(root, 0, sums)
  if (sums.indexOf(targetSum) === -1) return false
  return true
}

const helper = (root, runningSum, sums) => {
  if (!root) return
  const newRunningSum = root.val + runningSum
  if (!root.left && !root.right) {
    const newRunningSum = root.val + runningSum
    sums.push(newRunningSum)
  }

  helper(root.left, newRunningSum, sums)
  helper(root.right, newRunningSum, sums)
}
