// 1730. Shortest Path to Get Food
// https://leetcode.com/problems/shortest-path-to-get-food/

const getFood = function (grid) {
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]

  const start = getStart()
  const visited = new Set()
  let queue = [start]

  while (queue.length) {
    const len = queue.length

    for (let i = 0; i < len; i++) {
      const [row, col, path] = queue.shift()

      if (grid[row][col] === '#') return path

      for (const [dx, dy] of directions) {
        const x = row + dx
        const y = col + dy
        const key = `${x}, ${y}`

        if (x < 0 || x >= grid.length) continue
        if (y < 0 || y >= grid[0].length) continue
        if (grid[x][y] === 'X') continue
        if (visited.has(key)) continue

        visited.add(key)
        queue.push([x, y, path + 1])
      }
    }
  }

  return -1

  function getStart() {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < grid[0].length; j++) {
        if (grid[i][j] === '*') return [i, j, 0]
      }
    }
  }
}
