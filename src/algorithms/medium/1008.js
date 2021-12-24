// 1008. Construct Binary Search Tree from Preorder Traversal
// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

// const bstFromPreorder = (preorder) => {
//   if (preorder.length === 0) return null
//   const currentValue = preorder[0]
//   let rightSubtreeIdx = preorder.length

//   for (let idx = 1; idx < preorder.length; idx++) {
//     const value = preorder[idx]
//     if (value >= currentValue) {
//       rightSubtreeIdx = idx
//       break
//     }
//   }
//   const left = bstFromPreorder(preorder.slice(1, rightSubtreeIdx))
//   const right = bstFromPreorder(preorder.slice(rightSubtreeIdx))
//   return new TreeNode(currentValue, left, right)
// }

const bstFromPreorder = (preorder) => {
  let index = 0
  return dfs(-Infinity, Infinity)
  function dfs(lower, upper) {
    if (index === preorder.length) return null
    if (preorder[index] >= lower && preorder[index] < upper) {
      const root = new TreeNode(preorder[index])
      index++
      root.left = dfs(lower, root.val)
      root.right = dfs(root.val, upper)
      return root
    }
    return null
  }
}
