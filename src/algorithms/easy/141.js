// 141. Linked List Cycle
// https://leetcode.com/problems/linked-list-cycle/

const hasCycle = (head) => {
  while (head) {
    if (head.visited) return true
    head.visited = true
    head = head.next
  }
  return false
}
