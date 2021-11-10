// 907. Sum of Subarray Minimums
// https://leetcode.com/problems/sum-of-subarray-minimums/

const sumSubarrayMins = function(A) {
  let leftIndex = new Array(A.length)
  let leftStack = []
  
  for (let i = A.length - 1; i >= 0; i--) {
    if (i === A.length - 1) {
      leftIndex[i] = 1
      leftStack.push(i)
    } else if (A[i] > A[i + 1]) {
      leftIndex[i] = 1
      leftStack.push(i)
      
    } else {
      let count = 1
      //console.log(leftStack)
      while (A[i] < A[leftStack[leftStack.length - 1]]) {
        //console.log(leftStack)
        count += leftIndex[leftStack[leftStack.length - 1]]
        leftStack.pop()
      }
      leftIndex[i] = count
      leftStack.push(i)
    }
    
  }
  
  let rightIndex = new Array(A.length)
  let rightStack = []
  
  for (let i = 0; i < A.length; i++) {
    if (i === 0) {
      rightIndex[i] = 1
      rightStack.push(i)
    } else if (A[i] > A[i - 1]) {
      rightIndex[i] = 1
      rightStack.push(i)
      
    } else {
      let count = 1
      while (A[i] <= A[rightStack[rightStack.length - 1]]) {
        //console.log(rightStack)
        count += rightIndex[rightStack[rightStack.length - 1]]
        rightStack.pop()
      }
      rightStack.push(i)
      rightIndex[i] = count
    }
    
  }
  let sum = 0
  for (let i = 0; i < A.length; i++) {
    sum += rightIndex[i] * leftIndex[i] * A[i]
  }
  return (sum % 1000000007)
  
}
