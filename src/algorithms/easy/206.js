// 206. Reverse Linked List
// https://leetcode.com/problems/reverse-linked-list/

var reverseList = function (head) {
  let previousNode = null
  let currentNode = head

  while (currentNode !== null) {
    const nextNode = currentNode.next
    currentNode.next = previousNode
    previousNode = currentNode
    currentNode = nextNode
  }
  return previousNode
}
