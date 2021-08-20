// 1051. Height Checker
// https://leetcode.com/problems/height-checker/

const heightChecker = (heights) => {
  let count = 0
  const temp = [...heights].sort((a, b) => a - b)
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== temp[i]) count++
  }
  return count
}
