// 25. Reverse Nodes in k-Group
// https://leetcode.com/problems/reverse-nodes-in-k-group/

var reverseKGroup = function (head, k) {
  if (head === null || head.next === null || k === 1) return head
  let dummyHead = new ListNode(-1)
  dummyHead.next = head
  let begin = dummyHead
  let i = 0
  while (head !== null) {
    i++
    if (i % k === 0) {
      begin = reverse(begin, head.next)
      head = begin.next
    } else {
      head = head.next
    }
  }
  return dummyHead.next

  function reverse(begin, end) {
    let previousNode = begin
    let currentNode = begin.next
    let first = currentNode
    while (currentNode !== end) {
      let nextNode = currentNode.next
      currentNode.next = previousNode
      previousNode = currentNode
      currentNode = nextNode
    }
    begin.next = previousNode
    first.next = end
    return first
  }
}
