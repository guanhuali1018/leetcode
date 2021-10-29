// 236. Lowest Common Ancestor of a Binary Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

const lowestCommonAncestor = (root, p, q) => {
  if (!root || root === p || root === q) return root
  const l = lowestCommonAncestor(root.left, p, q)
  const r = lowestCommonAncestor(root.right, p, q)
  if (!l) return r
  if (!r) return l
  return root
}
