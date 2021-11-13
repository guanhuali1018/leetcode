// 370. Range Addition
// https://leetcode.com/problems/range-addition/

const getModifiedArray = function(length, updates) {
  const arr = new Array(length).fill(0)
  for (const up of updates) {
    const start = up[0]
    const end = up[1]
    const inc = up[2]
    for (let j = 0; j < arr.length; j++) {
      if (j >= start && j <= end) {
        arr[j] += inc
      }
    }
  }
  return arr
}
