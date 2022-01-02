// 37. Sudoku Solver
// https://leetcode.com/problems/sudoku-solver/

const solveSudoku = (board) => {
  solvePartialSudoku(0, 0, board)
  return board
}

const solvePartialSudoku = (row, col, board) => {
  let currentRow = row
  let currentCol = col
  if (currentCol === board[currentRow].length) {
    currentRow++
    currentCol = 0
    if (currentRow === board.length) return true
  }

  if (board[currentRow][currentCol] === '.') {
    for (let digit = 1; digit < 10; digit++) {
      if (isValidAtPosition(digit + '', currentRow, currentCol, board)) {
        board[currentRow][currentCol] = digit + ''
        if (solvePartialSudoku(currentRow, currentCol + 1, board)) return true
      }
    }
    board[currentRow][currentCol] = '.'
    return false
  }

  return solvePartialSudoku(currentRow, currentCol + 1, board)
}

const isValidAtPosition = (value, row, col, board) => {
  const rowIsValid = !board[row].includes(value)
  const colIsValid = !board.map((r) => r[col]).includes(value)

  if (!rowIsValid || !colIsValid) return false

  const subgridRowStart = Math.floor(row / 3) * 3
  const subgrifColStart = Math.floor(col / 3) * 3
  for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
    for (let colIdx = 0; colIdx < 3; colIdx++) {
      const rowToCheck = subgridRowStart + rowIdx
      const colToCheck = subgrifColStart + colIdx
      const existingValue = board[rowToCheck][colToCheck]

      if (existingValue === value) return false
    }
  }

  return true
}
