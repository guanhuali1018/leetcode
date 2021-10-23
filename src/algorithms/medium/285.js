// 285. Inorder Successor in BST
// https://leetcode.com/problems/inorder-successor-in-bst/

const inorderSuccessor = (root, p) => {
  const order = getOrder(root)
  for (let i = 0; i < order.length; i++) {
    const current = order[i]
    if (current === p) {
      if (i === order.length - 1) return null
      return order[i + 1]
    } else continue
  }
  return null
}

const getOrder = (root, order = []) => {
  if (root === null) return order
  getOrder(root.left, order)
  order.push(root)
  getOrder(root.right, order)
  return order
}
