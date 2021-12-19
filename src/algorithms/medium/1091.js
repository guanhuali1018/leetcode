// 1091. Shortest Path in Binary Matrix
// https://leetcode.com/problems/shortest-path-in-binary-matrix/

var shortestPathBinaryMatrix = function (grid) {
  let que = [{ i: 0, j: 0 }]
  let len = 1
  let n = grid.length
  if (grid[n - 1][n - 1] === 1) return -1

  while (que.length > 0) {
    let q = []
    for (let i = 0; i < que.length; i++) {
      const current = que[i]
      if (current.i === grid.length - 1 && current.j === grid.length - 1)
        return len
      if (
        current.i < 0 ||
        current.j < 0 ||
        current.i >= grid.length ||
        current.j >= grid.length ||
        grid[current.i][current.j] === 1
      )
        continue
      q.push({ i: current.i, j: current.j + 1 })
      q.push({ i: current.i, j: current.j - 1 })
      q.push({ i: current.i + 1, j: current.j })
      q.push({ i: current.i - 1, j: current.j })
      q.push({ i: current.i + 1, j: current.j + 1 })
      q.push({ i: current.i - 1, j: current.j - 1 })
      q.push({ i: current.i - 1, j: current.j + 1 })
      q.push({ i: current.i + 1, j: current.j - 1 })

      grid[current.i][current.j] = 1
    }
    que = q
    len++
  }

  return -1
}
