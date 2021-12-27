// 759. Employee Free Time
// https://leetcode.com/problems/employee-free-time/

const employeeFreeTime = (schedule) => {
  const result = []
  const merged = []
  const secondMerge = []
  for (let i = 0; i < schedule.length; i++) {
    for (let j = 0; j < schedule[i].length; j++) {
      merged.push([schedule[i][j].start, schedule[i][j].end])
    }
  }
  merged.sort((a, b) => a[0] - b[0])
  for (let i = 0; i < merged.length; i++) {
    if (secondMerge.length === 0) secondMerge.push(merged[i])
    if (secondMerge[secondMerge.length - 1][1] > merged[i][0]) {
      secondMerge[secondMerge.length - 1][0] = Math.min(
        secondMerge[secondMerge.length - 1][0],
        merged[i][0]
      )
      secondMerge[secondMerge.length - 1][1] = Math.max(
        secondMerge[secondMerge.length - 1][1],
        merged[i][1]
      )
    } else {
      secondMerge.push(merged[i])
    }
  }
  for (let i = 0; i < secondMerge.length - 1; i++) {
    if (secondMerge[i][1] < secondMerge[i + 1][0]) {
      result.push({ start: secondMerge[i][1], end: secondMerge[i + 1][0] })
    }
  }
  return result
}
