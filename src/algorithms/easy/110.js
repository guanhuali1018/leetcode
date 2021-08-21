// 110. Balanced Binary Tree
// https://leetcode.com/problems/balanced-binary-tree/

const isBalanced = (root) => {
  return getHeight(root) !== -1
}

const getHeight = (root) => {
  if (root === null) return 0
  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)
  if (
    leftHeight === -1 ||
    rightHeight === -1 ||
    Math.abs(leftHeight - rightHeight) > 1
  )
    return -1
  return 1 + Math.max(leftHeight, rightHeight)
}
