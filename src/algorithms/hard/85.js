// 85. Maximal Rectangle
// https://leetcode.com/problems/maximal-rectangle/

const maximalRectangle = (matrix) => {
  let n = matrix.length
  let ans = 0

  if (n === 0) return 0

  let m = matrix[0].length
  let heights = new Array(m + 1).fill(0)
  heights[m] = -1

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] == '0') {
        heights[j] = 0
      } else heights[j]++
    }

    let st = []
    for (let j = 0; j <= m; j++) {
      while (st.length > 0 && heights[j] < heights[st[st.length - 1]]) {
        let cur = st.pop()

        if (st.length === 0) {
          ans = Math.max(ans, heights[cur] * j)
        } else ans = Math.max(ans, heights[cur] * (j - st[st.length - 1] - 1))
      }

      st.push(j)
    }
  }

  return ans
}
