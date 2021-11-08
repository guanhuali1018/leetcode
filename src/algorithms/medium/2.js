// 2. Add Two Numbers
// https://leetcode.com/problems/add-two-numbers/

const addTwoNumbers = (l1, l2) => {
  const result = new ListNode(0)
  let currentNode = result
  let nodeOne = l1
  let nodeTwo = l2
  let carry = 0
  while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
    const valueOne = nodeOne !== null ? nodeOne.val : 0
    const valueTwo = nodeTwo !== null ? nodeTwo.val : 0
    const sumOfValues = valueOne + valueTwo + carry
    const value = sumOfValues % 10
    const newNode = new ListNode(value)
    currentNode.next = newNode
    currentNode = newNode
    carry = Math.floor(sumOfValues / 10)
    nodeOne = nodeOne !== null ? nodeOne.next : null
    nodeTwo = nodeTwo !== null ? nodeTwo.next : null
  }
  return result.next
}
