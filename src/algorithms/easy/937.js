// 937. Reorder Data in Log Files
// https://leetcode.com/problems/reorder-data-in-log-files/

const reorderLogFiles = (logs) => {
  const digits = [],
    letters = []

  for (const log of logs) {
    if (isFinite(log.split(' ')[1])) digits.push(log)
    else letters.push(log)
  }
  letters.sort((a, b) => {
    let l1 = a.split(' ').slice(1).join(' '),
      l2 = b.split(' ').slice(1).join(' ')
    if (l1 === l2) return a > b ? 1 : -1
    return l1 > l2 ? 1 : -1
  })

  return [...letters, ...digits]
}
