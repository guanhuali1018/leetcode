// 92. Reverse Linked List II
// https://leetcode.com/problems/reverse-linked-list-ii/

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

function reverseBetween(head, m, n) {
  let dummy = new ListNode
  let pre = dummy
  dummy.next = head
  for (let i = 0; i < m - 1; i++) {
    pre = pre.next
  }
  
  let cur = pre.next
  for (let i = m; i < n; i++) {
    let t = cur.next
    cur.next = t.next
    t.next = pre.next
    pre.next = t
  }
  
  return dummy.next
}

// const reverseBetween = function(head, m, n) {
//   let dummy = new ListNode()
//   let sentinel = dummy
//   sentinel.next = head
//
//   for (let i = 1; i < m; i++) {
//     sentinel = sentinel.next
//   }
//
//   let curr = sentinel.next
//   let next = curr.next
//
//   for (let i = 0; i < n - m; i++) {
//     curr.next = next.next
//     next.next = sentinel.next
//     sentinel.next = next
//
//     next = curr.next
//   }
//
//   return dummy.next
// }
