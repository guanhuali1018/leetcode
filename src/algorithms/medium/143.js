// 143. Reorder List
// https://leetcode.com/problems/reorder-list/

const reorderList = function(head) {
  let second = split(head)
  second = reverse(second)
  merge(head, second)
  
  function split(node) {
    let fast = node
    let slow = node
    
    while (fast !== null) {
      if (fast.next !== null && fast.next.next !== null) {
        slow = slow.next
        fast = fast.next.next
      } else fast = null
    }
    
    const secondHalf = slow.next
    slow.next = null
    
    return secondHalf
  }
  
  function reverse(node) {
    let curr = node
    let prev = null
    let next = null
    
    while (curr !== null) {
      next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    
    return prev
  }
  
  function merge(l1, l2) {
    let l1Next = null
    let l2Next = null
    
    while (l2 !== null) {
      l1Next = l1.next
      l2Next = l2.next
      
      l1.next = l2
      l2.next = l1Next
      
      l1 = l1Next
      l2 = l2Next
    }
  }
}
