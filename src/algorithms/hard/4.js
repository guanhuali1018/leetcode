// 4. Median of Two Sorted Arrays
// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = (nums1, nums2) => {
  const merged = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    const firstNum = nums1[i]
    const secondNum = nums2[j]

    if (firstNum <= secondNum) {
      merged.push(firstNum)
      i++
    } else {
      merged.push(secondNum)
      j++
    }
  }

  while (i < nums1.length) {
    merged.push(nums1[i])
    i++
  }

  while (j < nums2.length) {
    merged.push(nums2[j])
    j++
  }

  const isOdd = merged.length % 2 !== 0

  if (isOdd) {
    return merged[Math.floor(merged.length / 2)]
  } else {
    return (merged[merged.length / 2 - 1] + merged[merged.length / 2]) / 2
  }
}
