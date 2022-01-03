// 297. Serialize and Deserialize Binary Tree
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

var serializeHelper = function (root, lst) {
  if (!root) {
    lst.push('#')
  } else {
    lst.push(root.val)
    serializeHelper(root.left, lst)
    serializeHelper(root.right, lst)
  }
}
var serialize = function (root) {
  var lst = []
  serializeHelper(root, lst)
  return lst.toString()
}
var deserializeHelper = function (lst) {
  if (lst.length < 1) {
    return null
  }
  var val = lst.splice(0, 1)
  if (val[0] === '#') {
    return null
  }
  var root = new TreeNode(parseInt(val))
  root.left = deserializeHelper(lst)
  root.right = deserializeHelper(lst)
  return root
}
var deserialize = function (data) {
  if (!data || data.length === 0) {
    return null
  }
  return deserializeHelper(data.split(','))
}
