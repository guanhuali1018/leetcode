// 145. Binary Tree Postorder Traversal
// https://leetcode.com/problems/binary-tree-postorder-traversal/

var postorderTraversal = function (root) {
  const result = []
  postorder(root)
  return result

  function postorder(root) {
    if (root === null) return
    postorder(root.left)
    postorder(root.right)
    result.push(root.val)
  }
}
