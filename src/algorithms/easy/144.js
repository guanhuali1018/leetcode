// 144. Binary Tree Preorder Traversal
// https://leetcode.com/problems/binary-tree-preorder-traversal/

var preorderTraversal = function (root) {
  const result = []
  preorder(root)
  return result

  function preorder(root) {
    if (root === null) return
    result.push(root.val)
    preorder(root.left)
    preorder(root.right)
  }
}
