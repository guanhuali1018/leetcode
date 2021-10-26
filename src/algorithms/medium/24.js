// 24. Swap Nodes in Pairs
// https://leetcode.com/problems/swap-nodes-in-pairs/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

// Time: O(n) Space: O(n)
// var swapPairs = function(head) {
//     if (head === null || head.next === null) return head // base case

//     const nextNode = head.next
//     head.next = swapPairs(head.next.next)
//     nextNode.next = head

//     return nextNode
// };

// Time: O(n) Space: O(1)
function swapPairs(head) {
  const tempNode = new ListNode(0)
  tempNode.next = head

  let prevNode = tempNode
  while (prevNode.next !== null && prevNode.next.next !== null) {
    const firstNode = prevNode.next
    const secondNode = prevNode.next.next
    firstNode.next = secondNode.next
    secondNode.next = firstNode
    prevNode.next = secondNode

    prevNode = firstNode // attention!
  }

  return tempNode.next
}
