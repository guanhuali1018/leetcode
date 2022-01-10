// 124. Binary Tree Maximum Path Sum
// https://leetcode.com/problems/binary-tree-maximum-path-sum/

var maxPathSum = function (root) {
  const [_, maxSum] = findMax(root)
  return maxSum

  function findMax(root) {
    if (root === null) return [0, -Infinity]
    const [leftMaxSumAsBranch, leftMaxPathSum] = findMax(root.left)
    const [rightMaxSumAsBranch, rightMaxPathSum] = findMax(root.right)
    const maxChildSumAsBranch = Math.max(
      leftMaxSumAsBranch,
      rightMaxSumAsBranch
    )

    const currentVal = root.val
    const maxSumAsBranch = Math.max(
      maxChildSumAsBranch + currentVal,
      currentVal
    )
    const maxPathSumAsRootNode = Math.max(
      leftMaxSumAsBranch + currentVal + rightMaxSumAsBranch,
      maxSumAsBranch
    )
    const maxPathSum = Math.max(
      leftMaxPathSum,
      rightMaxPathSum,
      maxPathSumAsRootNode
    )

    return [maxSumAsBranch, maxPathSum]
  }
}
