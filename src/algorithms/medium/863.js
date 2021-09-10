// 863. All Nodes Distance K in Binary Tree
// https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/

function distanceK(tree, target, k) {
  if (!tree) return []
  const nodesToParents = {}
  populateNodesToParents(tree, nodesToParents)
  const targetNode = getNodeFromValue(target.val, tree, nodesToParents)

  return breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k)

  function breadthFirstSearchForNodesDistanceK(targetNode, nodesToParents, k) {
    const queue = [[targetNode, 0]]
    const seen = new Set([targetNode.val])
    while (queue.length > 0) {
      const [currentNode, distanceFromTarget] = queue.shift()

      if (distanceFromTarget === k) {
        const nodesDistanceK = queue.map((pair) => pair[0].val)
        nodesDistanceK.push(currentNode.val)
        return nodesDistanceK
      }

      const connectedNodes = [
        currentNode.left,
        currentNode.right,
        nodesToParents[currentNode.val],
      ]
      for (const node of connectedNodes) {
        if (node === null) continue

        if (seen.has(node.val)) continue

        seen.add(node.val)
        queue.push([node, distanceFromTarget + 1])
      }
    }

    return []
  }

  function getNodeFromValue(val, tree, nodesToParents) {
    if (tree.val === val) return tree

    const nodeParent = nodesToParents[val]
    console.log(nodesToParents)
    console.log(val)
    console.log(nodeParent)
    if (nodeParent.left !== null && nodeParent.left.val === val)
      return nodeParent.left

    return nodeParent.right
  }

  function populateNodesToParents(node, nodesToParents, parent = null) {
    if (node !== null) {
      nodesToParents[node.val] = parent
      populateNodesToParents(node.left, nodesToParents, node)
      populateNodesToParents(node.right, nodesToParents, node)
    }
  }
}
