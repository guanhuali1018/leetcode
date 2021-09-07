// 94. Binary Tree Inorder Traversal
// https://leetcode.com/problems/binary-tree-inorder-traversal/

const inorderTraversal = (root) => {
  let result = []
  const dfs = (root) => {
    if (root === null) return
    dfs(root.left)
    result.push(root.val)
    dfs(root.right)
  }

  dfs(root)
  return result
}
