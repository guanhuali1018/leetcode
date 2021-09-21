// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

const merge = (array) => {
  // Write your code here.
  array.sort((a, b) => a[0] - b[0])
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (result[result.length - 1]) {
      if (result[result.length - 1][1] >= array[i][0]) {
        result[result.length - 1][1] = Math.max(
          array[i][1],
          result[result.length - 1][1]
        )
      } else result.push(array[i])
    } else result.push(array[i])
  }
  return result
}
