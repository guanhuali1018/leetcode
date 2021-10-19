// 31. Next Permutation
// https://leetcode.com/problems/next-permutation/

const nextPermutation = (nums) => {
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      const large = nextLarge(i)
      swap(i, large)
      reverse(i + 1)
      return
    }
  }

  nums.reverse()

  function swap(i, j) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }

  function reverse(idx) {
    let start = idx,
      end = nums.length - 1
    while (start < end) {
      swap(start, end)
      start++
      end--
    }
  }

  function nextLarge(idx) {
    for (let i = nums.length - 1; i > idx; i--) {
      if (nums[i] > nums[idx]) return i
    }
  }
}
