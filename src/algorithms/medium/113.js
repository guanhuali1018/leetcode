// 113. Path Sum II
// https://leetcode.com/problems/path-sum-ii/

// Time: O(n) [go through all nodes] Spance: worst O(n)

// var pathSum = function (root, targetSum) {
//   return helper(root, targetSum, [], [])

//   function helper(root, sum, runningAnswer, result) {
//     if (!root) return result

//     runningAnswer.push(root.val)

//     if (!root.left && !root.right && root.val === sum) {
//       result.push(runningAnswer.slice())
//     }

//     helper(root.left, sum - root.val, runningAnswer, result)
//     helper(root.right, sum - root.val, runningAnswer, result)

//     runningAnswer.pop()

//     return result
//   }
// }

let hashT = {
  id123: 4,
  id65: 1,
  id345: 1,
  id346: 2,
}

const key = Object.keys(hashT)
key.sort((a, b) => {
  if (hashT[b] - hashT[a] > 0) {
    return 1
  }
  if (hashT[b] - hashT[a] < 0) {
    return -1
  }
  if (hashT[b] - hashT[a] === 0) {
    let numA = parseInt(a.slice(2))
    let numB = parseInt(b.slice(2))
    return numA - numB
  }
})
console.log(key)
