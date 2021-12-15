// 1135. Connecting Cities With Minimum Cost
// https://leetcode.com/problems/connecting-cities-with-minimum-cost/

const minimumCost = function(n, connections) {
  const parent = new Array(n + 1)
  let N = n
  let res = 0
  
  for (let i = 0; i <= N; i++) {
    parent[i] = i
  }
  
  connections.sort((a, b) => a[2] - b[2])
  
  for (const c of connections) {
    let x = c[0]
    let y = c[1]
    if (find(x) !== find(y)) {
      res += c[2]
      union(x, y)
    }
  }
  
  return N === 1 ? res : -1
  
  function find(x) {
    if (parent[x] === x) {
      return parent[x]
    }
    parent[x] = find(parent[x])
    return parent[x]
  }
  
  function union(x, y) {
    let px = find(x)
    let py = find(y)
    
    if (px !== py) {
      parent[px] = py
      N--
    }
  }
}
