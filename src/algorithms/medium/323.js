// 323. Number of Connected Components in an Undirected Graph
// https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/

const countComponents = function(n, edges) {
  let visited = []
  let graph = buildGraph(n, edges)
  console.log(graph)
  let res = 0
  
  for (let i = 0; i < n; i++) {
    visited.push(false)
  }
  
  for (let i = 0; i < n; i++) {
    if (visited[i] === false) {
      res++
      dfs(i, graph, visited)
    }
  }
  return res
}

function buildGraph(n, edges) {
  let graph = Array.from({ length: n }, () => [])
  for (let edge of edges) {
    let [src, dist] = edge
    graph[src].push(dist)
    graph[dist].push(src)
  }
  return graph
}

function dfs(index, graph, visited) {
  visited[index] = true
  let nodes = graph[index]
  for (let i = 0; i < nodes.length; i++) {
    if (visited[nodes[i]] === false) {
      dfs(nodes[i], graph, visited)
    }
  }
}
