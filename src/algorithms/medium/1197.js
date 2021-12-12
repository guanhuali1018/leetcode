// 1197. Minimum Knight Moves
// https://leetcode.com/problems/minimum-knight-moves/

const minKnightMoves = (x, y) => {
  let res = 0
  let queue = [[0, 0]]
  let moves = [
    [2, 1],
    [1, 2],
    [-2, 1],
    [-1, 2],
    [-2, -1],
    [-1, -2],
    [2, -1],
    [1, -2],
  ]
  let visited = new Set()
  while (queue.length) {
    let size = queue.length
    for (let i = 0; i < size; i++) {
      let current = queue.shift()
      let cX = current[0]
      let cY = current[1]
      if (cX === x && cY === y) return res
      for (let move of moves) {
        let nX = cX + move[0]
        let nY = cY + move[1]
        if (!visited.has(nX + ',' + nY)) {
          visited.add(nX + ',' + nY)
          queue.push([nX, nY])
        }
      }
    }
    res++
  }
}
