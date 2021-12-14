// 114. Flatten Binary Tree to Linked List
// https://leetcode.com/problems/flatten-binary-tree-to-linked-list/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

var flatten = function (root) {
  if (!root) return
  flatten(root.left)
  flatten(root.right)
  if (root.right) {
    const temp = new TreeNode(
      root.right?.val,
      root.right?.left,
      root.right?.right
    )
    root.right = root.left
    root.left = null
    while (root.right) root = root.right
    root.right = temp
  } else {
    root.right = root.left
    root.left = null
  }
}
