// 98. Validate Binary Search Tree
// https://leetcode.com/problems/validate-binary-search-tree/

const isValidBST = (tree) => {
  return dfs(tree, -Infinity, Infinity)
}

const dfs = (tree, min, max) => {
  if (tree === null) return true
  if (tree.val <= min || tree.val >= max) return false
  const left = dfs(tree.left, min, tree.val)
  const right = dfs(tree.right, tree.val, max)
  return left && right
}
