// 694. Number of Distinct Islands
// https://leetcode.com/problems/number-of-distinct-islands/

function numDistinctIslands(graph) {
  const pattern = new Set()
  
  for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[0].length; col++) {
      if (graph[row][col] === 1) pattern.add(depthFirst(graph, row, col, 'o'))
    }
  }
  
  return pattern.size
}

function depthFirst(graph, row, col, di) {
  if (graph[row] && graph[row][col] === 1) {
    
    graph[row][col] = 0
    
    let p = di + depthFirst(graph, row + 1, col, 'd') +
      depthFirst(graph, row - 1, col, 'u') +
      depthFirst(graph, row, col + 1, 'r') +
      depthFirst(graph, row, col - 1, 'l') + 'b'
    
    return p
    
  } else return ''
}
