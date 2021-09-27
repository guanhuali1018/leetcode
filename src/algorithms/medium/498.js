// 498. Diagonal Traverse
// https://leetcode.com/problems/diagonal-traverse/

function isOutOfBounds(row, col, height, width) {
  return row < 0 || row > height || col < 0 || col > width
}

const findDiagonalOrder = (mat) => {
  const result = []
  const height = mat.length - 1
  const width = mat[0].length - 1
  let goingUp = true
  let row = 0
  let col = 0
  while (!isOutOfBounds(row, col, height, width)) {
    result.push(mat[row][col])
    if (goingUp) {
      if (row === 0 || col === width) {
        if (col === width) {
          row++
        } else {
          col++
        }
        goingUp = false
      } else {
        row--
        col++
      }
    } else {
      if (col === 0 || row === height) {
        if (row === height) {
          col++
        } else {
          row++
        }
        goingUp = true
      } else {
        row++
        col--
      }
    }
  }

  return result
}
