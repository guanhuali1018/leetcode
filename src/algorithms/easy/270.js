// 270. Closest Binary Search Tree Value
// https://leetcode.com/problems/closest-binary-search-tree-value/

const closestValue = (root, target) => {
  if (root === null) return root.val
  return helper(root, target, root.val)
}

const helper = (root, target, closest) => {
  while (root !== null) {
    if (Math.abs(target - closest) > Math.abs(root.val - target))
      closest = root.val
    if (target < root.val) {
      root = root.left
    } else if (target > root.val) {
      root = root.right
    } else break
  }
  return closest
}
