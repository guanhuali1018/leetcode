// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const mergeTwoLists = (l1, l2) => {
  let list = new ListNode()
  let head = list

  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      list.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      list.next = new ListNode(l2.val)
      l2 = l2.next
    }
    list = list.next
  }

  if (l1 !== null) list.next = l1
  if (l2 !== null) list.next = l2

  return head.next
}
