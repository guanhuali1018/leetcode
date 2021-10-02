// 73. Set Matrix Zeroes
// https://leetcode.com/problems/set-matrix-zeroes/

var setZeroes = function (matrix) {
  const hasChanged = {}
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      const key = i + '*' + j
      if (matrix[i][j] === 0 && !(key in hasChanged)) {
        helper(i, j)
      }
    }
  }

  function helper(i, j) {
    let col = 0
    while (col < matrix[0].length) {
      const key = i + '*' + col
      if (matrix[i][col] !== 0) {
        hasChanged[key] = true
      }
      matrix[i][col] = 0
      col++
    }

    let row = 0
    while (row < matrix.length) {
      const key = row + '*' + j
      if (matrix[row][j] !== 0) {
        hasChanged[key] = true
      }
      matrix[row][j] = 0
      row++
    }
  }
}
