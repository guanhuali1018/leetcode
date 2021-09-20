// 79. Word Search
// https://leetcode.com/problems/word-search/

var exist = function (board, word) {
  if (board.length === 0) return false
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (dfs(board, i, j, word)) return true
    }
  }

  return false

  function dfs(board, i, j, remain) {
    if (remain.length === 0) return true
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length)
      return false
    if (board[i][j] !== remain[0]) return false

    let char = board[i][j]
    board[i][j] = '-' // 防止在同次dfs里重复访问
    let result =
      dfs(board, i + 1, j, remain.substring(1)) ||
      dfs(board, i - 1, j, remain.substring(1)) ||
      dfs(board, i, j + 1, remain.substring(1)) ||
      dfs(board, i, j - 1, remain.substring(1))
    board[i][j] = char // attention 一次结束之后还原
    return result
  }
}
