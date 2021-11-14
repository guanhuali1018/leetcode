// 19. Remove Nth Node From End of List
// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

const removeNthFromEnd = (head, n) => {
  let first = head
  let second = head
  let counter = 1
  while (counter <= n) {
    second = second.next
    counter++
  }
  if (second === null) {
    if (head.next === null) return null
    head.val = head.next.val
    head.next = head.next.next
    return head
  }
  while (second.next !== null) {
    second = second.next
    first = first.next
  }
  first.next = first.next.next
  return head
}
