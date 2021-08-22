// 111. Minimum Depth of Binary Tree
// https://leetcode.com/problems/minimum-depth-of-binary-tree/

const minDepth = (root) => {
  if (!root) return 0
  let result
  const minHeight = (root, depth) => {
    if (!root.left && !root.right) {
      result = Math.min(result || depth, depth)
    }
    if (root.left) minHeight(root.left, depth + 1)
    if (root.right) minHeight(root.right, depth + 1)
  }
  minHeight(root, 1)
  return result
}
