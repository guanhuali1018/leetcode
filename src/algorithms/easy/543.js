// 543. Diameter of Binary Tree
// https://leetcode.com/problems/diameter-of-binary-tree/

const diameterOfBinaryTree = (root) => {
  let result = 0

  const dfs = (root) => {
    if (root === null) return 0
    const left = dfs(root.left)
    const right = dfs(root.right)
    result = Math.max(result, left + right + 1)
    return Math.max(left, right) + 1
  }
  dfs(root)
  return result - 1
}
