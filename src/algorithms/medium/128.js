// 128. Longest Consecutive Sequence
// https://leetcode.com/problems/longest-consecutive-sequence/

const longestConsecutive = (nums) => {
  let longestLength = 0
  const hashT = {}
  for (const num of nums) {
    hashT[num] = true
  }

  for (const num of nums) {
    let currentLength = 0
    if (!hashT[num]) continue
    hashT[num] = false
    currentLength++
    let left = num - 1
    let right = num + 1
    while (left in hashT) {
      hashT[left] = false
      currentLength++
      left--
    }
    while (right in hashT) {
      hashT[right] = false
      currentLength++
      right++
    }

    if (currentLength > longestLength) longestLength = currentLength
  }

  return longestLength
}
