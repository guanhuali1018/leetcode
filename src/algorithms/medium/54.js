// 54. Spiral Matrix
// https://leetcode.com/problems/spiral-matrix/

const spiralOrder = (matrix) => {
  const result = []
  let startRow = 0
  let endRow = matrix.length - 1
  let startCol = 0
  let endCol = matrix[0].length - 1

  while (startRow <= endRow && startCol <= endCol) {
    for (let col = startCol; col <= endCol; col++) {
      result.push(matrix[startRow][col])
    } // left => right

    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(matrix[row][endCol])
    } // up => down

    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break
      result.push(matrix[endRow][col])
    } // right => left

    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break
      result.push(matrix[row][startCol])
    } // down => up

    startRow++
    endRow--
    startCol++
    endCol--
  }

  return result
}
