// 210. Course Schedule II
// https://leetcode.com/problems/course-schedule-ii/

const findOrder = (numCourses, prerequisites) => {
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
      // 如果存在
      for (const e of graph.get(v)) {
        indegree[e]--
        if (indegree[e] === 0) queue.push(e)
      }
    }
    // 如果不存在说明这个v不是任何前置条件，直接push就行
    order.push(v)
  }

  return numCourses === order.length ? order : []
}
