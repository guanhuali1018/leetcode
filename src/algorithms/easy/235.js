// 235. Lowest Common Ancestor of a Binary Search Tree
// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/

const lowestCommonAncestor = (root, p, q) => {
  if (root.val < p.val && root.val < q.val)
    return lowestCommonAncestor(root.right, p, q)
  if (root.val > p.val && root.val > q.val)
    return lowestCommonAncestor(root.left, p, q)
  return root
}
