// 207. Course Schedule
// https://leetcode.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
  const order = []
  const queue = []
  const graph = new Map()
  const indegree = new Array(numCourses).fill(0)

  for (const [e, v] of prerequisites) {
    if (graph.has(v)) {
      graph.get(v).push(e)
    } else {
      graph.set(v, [e])
    }
    indegree[e]++
  }

  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i)
  }

  while (queue.length) {
    const v = queue.shift()
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--
        if (indegree[e] === 0) queue.push(e)
      }
    }
    order.push(v)
  }

  return numCourses === order.length
}
