// 239. Sliding Window Maximum
// https://leetcode.com/problems/sliding-window-maximum/

const maxSlidingWindow = (nums, k) => {
  let maxes = []
  let q = []

  for (let last = 0, first = 1 - k; last < nums.length; last++, first++) {
    while (q.length && nums[last] > q[q.length - 1]) {
      q.pop()
    }
    q.push(nums[last])

    if (first < 0) continue

    maxes.push(q[0])

    if (nums[first] === q[0]) q.shift()
  }

  return maxes
}
