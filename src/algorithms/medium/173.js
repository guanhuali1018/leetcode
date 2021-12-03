// 173. Binary Search Tree Iterator
// https://leetcode.com/problems/binary-search-tree-iterator/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.arr = []
  dfs(root, this.arr)

  function dfs(root, arr) {
    if (!root) return

    dfs(root.left, arr)
    arr.push(root.val)
    dfs(root.right, arr)
  }
}

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  if (this.hasNext()) return this.arr.shift()
}

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.arr.length > 0
}

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
