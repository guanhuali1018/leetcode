// 226. Invert Binary Tree
// https://leetcode.com/problems/invert-binary-tree/

const invertTree = (root) => {
  if (root === null) return null
  const temp = root.left
  root.left = root.right
  root.right = temp
  invertTree(root.left)
  invertTree(root.right)
  return root
}
