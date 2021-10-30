// 230. Kth Smallest Element in a BST
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/

const kthSmallest = (root, k) => {
  const result = []
  const dfs = (root) => {
    if (root === null) return
    dfs(root.left, result)
    result.push(root.val)
    dfs(root.right)
  }
  dfs(root, result)
  return result[k - 1]
}
