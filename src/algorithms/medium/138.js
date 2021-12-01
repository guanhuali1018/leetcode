// 138. Copy List with Random Pointer
// https://leetcode.com/problems/copy-list-with-random-pointer/

// https://leetcode.com/problems/copy-list-with-random-pointer/discuss/689730/JavaScript-Solution
var copyRandomList = function (head) {
  if (!head) return null

  const map = new Map([[null, null]])

  let curr = head
  while (curr !== null) {
    map.set(curr, new Node(curr.val))
    curr = curr.next
  }

  curr = head
  while (curr !== null) {
    map.get(curr).next = map.get(curr.next)
    map.get(curr).random = map.get(curr.random)
    curr = curr.next
  }

  return map.get(head)
}
