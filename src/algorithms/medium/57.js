// 57. Insert Interval
// https://leetcode.com/problems/insert-interval/

const insert = function(intervals, newInterval) {
  intervals.push(newInterval)
  intervals.sort((a, b) => a[0] - b[0])
  const res = []
  for (let i = 0; i < intervals.length; i++) {
    if (res.length === 0) {
      res.push(intervals[i])
      continue
    }
    if (intervals[i][0] >= res[res.length - 1][0] && intervals[i][0] <= res[res.length - 1][1]) {
      res[res.length - 1][1] = Math.max(res[res.length - 1][1], intervals[i][1])
    } else {
      res.push(intervals[i])
    }
  }
  
  return res
}
