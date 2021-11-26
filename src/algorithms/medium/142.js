// 142. Linked List Cycle II
// https://leetcode.com/problems/linked-list-cycle-ii/

const detectCycle = (head) => {
  if (!head || !head.next || !head.next.next) return null
  let first = head.next
  let second = head.next.next
  while (first !== second) {
    first = first.next
    if (!second.next || !second.next.next) return null
    second = second.next.next
  }
  first = head
  while (first !== second) {
    first = first.next
    second = second.next
  }
  return first
}
