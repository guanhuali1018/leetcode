// 215. Kth Largest Element in an Array
// https://leetcode.com/problems/kth-largest-element-in-an-array/

const findKthLargest = (nums, k) => {
  let left = 0
  let right = nums.length - 1
  // eslint-disable-next-line no-constant-condition
  while (true) {
    let pos = partion(nums, left, right)
    if (pos == k - 1) return nums[pos]
    if (pos > k - 1) {
      right = pos - 1
    } else {
      left = pos + 1
    }
  }

  function partion(nums, left, right) {
    let pivot = nums[left]
    let l = left + 1
    let r = right
    while (l <= r) {
      if (nums[l] < pivot && nums[r] > pivot) {
        swap(l, r)
      }
      if (nums[l] >= pivot) l++
      if (nums[r] <= pivot) r--
    }
    swap(left, r)
    return r
  }

  function swap(i, j) {
    const temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
  }
}
