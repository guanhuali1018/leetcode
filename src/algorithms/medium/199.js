// 199. Binary Tree Right Side View
// https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function (root) {
  let res = []

  dfs(root, 0)

  return res

  function dfs(root, level) {
    if (!root) return

    if (!res[level]) res.push(root.val)

    dfs(root.right, level + 1)
    dfs(root.left, level + 1)
  }
}
