// 1120. Maximum Average Subtree
// https://leetcode.com/problems/maximum-average-subtree/

const maximumAverageSubtree = function(root) {
  let max = 0
  helper(root)
  return max
  
  function helper(root) {
    if (root === null) return [0, 0] // [ave, nums]
    
    const left = helper(root.left)
    const right = helper(root.right)
    
    if (left[1] + right[1] !== 0) {
      const ave = (left[0] * left[1] + right[0] * right[1] + root.val) / (left[1] + right[1] + 1)
      max = Math.max(max, ave)
      return [ave, left[1] + right[1] + 1]
    } else {
      max = Math.max(max, root.val)
      return [root.val, 1]
    }
  }
}
