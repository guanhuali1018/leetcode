// 621. Task Scheduler
// https://leetcode.com/problems/task-scheduler/

const leastInterval = (tasks, n) => {
  let record = new Array(26).fill(0)
  for (const t of tasks) {
    record[t.charCodeAt(0) - 'A'.charCodeAt(0)]++ //注意使用charcodeat方法
  }
  record.sort((a, b) => a - b)

  let max_n = record[25] - 1 // 需要构建的rows
  let space = max_n * n // 需要维护的空格数量

  for (let i = 24; i >= 0; i--) {
    if (record[i] > 0) {
      space -= Math.min(max_n, record[i])
    }
  }

  return space > 0 ? tasks.length + space : tasks.length
}
