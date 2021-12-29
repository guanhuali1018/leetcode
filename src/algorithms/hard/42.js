// 42. Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/

const trap = (height) => {
  const maxes = []
  let leftMax = 0
  for (let i = 0; i < height.length; i++) {
    const h = height[i]
    maxes[i] = leftMax
    leftMax = Math.max(h, leftMax)
  }
  let rightMax = 0
  for (let i = height.length - 1; i >= 0; i--) {
    const h = height[i]
    const minHeight = Math.min(rightMax, maxes[i])
    if (h < minHeight) {
      maxes[i] = minHeight - h
    } else {
      maxes[i] = 0
    }

    rightMax = Math.max(h, rightMax)
  }

  return maxes.reduce((a, b) => a + b)
}
