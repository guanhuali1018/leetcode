// 102. Binary Tree Level Order Traversal
// https://leetcode.com/problems/binary-tree-level-order-traversal/

const levelOrder = function(root) {
  const res = []
  
  if (root === null) return res
  
  let currentLevel = [root]
  
  while (currentLevel.length > 0) {
    const current = []
    const length = currentLevel.length
    
    for (let i = 0; i < length; i++) {
      const first = currentLevel[0]
      if (first.left) currentLevel.push(first.left)
      if (first.right) currentLevel.push(first.right)
      current.push(currentLevel.shift().val)
      
    }
    
    if (current.length > 0) res.push(current)
  }
  
  return res
}
