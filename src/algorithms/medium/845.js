// 845. Longest Mountain in Array
// https://leetcode.com/problems/longest-mountain-in-array/

const longestMountain = (arr) => {
  let longest = 0
  let i = 1
  while (i < arr.length - 1) {
    const isPeak = arr[i] > arr[i - 1] && arr[i] > arr[i + 1]
    if (!isPeak) {
      i++
      continue
    }

    let left = i - 2
    while (left >= 0 && arr[left] < arr[left + 1]) {
      left--
    }

    let right = i + 2
    while (right < arr.length && arr[right] < arr[right - 1]) {
      right++
    }

    const currentLongest = right - left - 1
    longest = Math.max(currentLongest, longest)
    i = right
  }
  return longest
}
