// 84. Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/

const largestRectangleArea = (heights) => {
  let n = heights.length
  let ans = 0
  heights.push(0)
  let st = []

  for (let i = 0; i <= n; i++) {
    while (st.length > 0 && heights[i] < heights[st[st.length - 1]]) {
      let cur = st.pop()
      if (st.length === 0) {
        ans = Math.max(ans, heights[cur] * i)
      } else {
        ans = Math.max(ans, heights[cur] * (i - st[st.length - 1] - 1))
      }
    }
    st.push(i)
  }

  return ans
}
