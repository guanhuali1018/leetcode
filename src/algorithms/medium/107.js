// 107. Binary Tree Level Order Traversal II
// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

const levelOrderBottom = function(root) {
  const res = []
  if (root === null) return res
  const currentLevel = [root]
  
  while (currentLevel.length > 0) {
    const length = currentLevel.length
    const current = []
    for (let i = 0; i < length; i++) {
      const first = currentLevel.shift()
      current.push(first.val)
      if (first.left) currentLevel.push(first.left)
      if (first.right) currentLevel.push(first.right)
    }
    if (current.length > 0) res.unshift(current)
  }
  
  return res
}
