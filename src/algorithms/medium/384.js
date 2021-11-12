// 348. Design Tic-Tac-Toe
// https://leetcode.com/problems/design-tic-tac-toe/

class TicTacToe {
  constructor(n) {
    this.len = n
    
    this.rows = new Array(n).fill(0)
    this.cols = new Array(n).fill(0)
    this.dia = 0
    this.antiDia = 0
  }
  
  move(row, col, player) {
    const i = player === 1 ? 1 : -1
    
    this.rows[row] += i
    this.cols[col] += i
    if (row === col) this.dia += i
    if (col === this.len - row - 1) this.antiDia += i
    
    if (
      Math.abs(this.rows[row]) === this.len ||
      Math.abs(this.cols[col]) === this.len ||
      Math.abs(this.dia) === this.len ||
      Math.abs(this.antiDia) === this.len
    ) return player
    
    return 0
  }
}
