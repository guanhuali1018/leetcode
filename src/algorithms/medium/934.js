// 934. Shortest Bridge
// https://leetcode.com/problems/shortest-bridge/

var shortestBridge = function (A) {
  const row = A.length,
    col = A[0].length,
    queue = []
  let steps = 1
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ]
  let hasFind = false

  // outerLoop: for (let i = 0; i < row; i++) {
  //     for (let j = 0; j < col; j++) {
  //         const item = A[i][j];
  //         if (item === 1) {
  //             dfs(i, j, queue);
  //             break outerLoop;
  //         }
  //     }
  // }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (A[i][j] === 1) {
        dfs(i, j)
        hasFind = true
        break
      }
    }
    if (hasFind) break
  }

  function dfs(i, j) {
    if (i < 0 || j < 0 || i >= row || j >= col || A[i][j] !== 1) return

    queue.push([i, j])
    A[i][j] = '*'

    for (const dir of dirs) {
      dfs(i + dir[0], j + dir[1])
    }
  }

  while (queue.length > 0) {
    let length = queue.length
    for (let i = 0; i < length; i++) {
      const [i, j] = queue.shift()
      for (const dir of dirs) {
        const newI = i + dir[0]
        const newJ = j + dir[1]

        if (
          newI < 0 ||
          newJ < 0 ||
          newI >= row ||
          newJ >= col ||
          A[newI][newJ] === '*'
        )
          continue

        if (A[newI][newJ] === 1) {
          return --steps
        }

        queue.push([newI, newJ])
        A[newI][newJ] = '*'
      }
    }
    steps++
  }
}
