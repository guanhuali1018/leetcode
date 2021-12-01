// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

var copyRandomList = function (head) {
  if (!head) return null

  let arr = []
  let res = new Node()
  let t = res

  while (head) {
    t.next = dfs(head, arr)
    t = t.next
    head = head.next
  }

  return res.next
}

function dfs(node, arr) {
  if (!node) return null
  if (node.visited) return arr[node.ref]

  let newNode = new Node(node.val)
  arr.push(newNode)

  // Under normal circumstances in programming, we shouldn't really modify the original data
  // But JS being JS doesn't have real hash tables, and or unique objectId we can use as keys
  // for POJO

  node.visited = true
  node.ref = arr.length - 1
  newNode.random = dfs(node.random, arr)

  return newNode
}
