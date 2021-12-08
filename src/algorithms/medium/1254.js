// 1254. Number of Closed Islands
// https://leetcode.com/problems/number-of-closed-islands

const closedIsland = (grid) => {
  let isl = 0
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) {
        isl += dfs(r, c, grid)
      }
    }
  }
  return isl
}

const dfs = (r, c, grid) => {
  if (r < 0 || r >= grid.length || c < 0 || c >= grid[r].length) return 0
  if (grid[r][c] === 1) return 1
  grid[r][c] = 1
  const top = dfs(r + 1, c, grid)
  const bottom = dfs(r - 1, c, grid)
  const right = dfs(r, c + 1, grid)
  const left = dfs(r, c - 1, grid)
  if (top + bottom + right + left === 4) return 1
  return 0
}
