// 560. Subarray Sum Equals K
// https://leetcode.com/problems/subarray-sum-equals-k/

const subarraySum = (nums, k) => {
  const hashT = new Map()
  hashT.set(0, 1)
  let result = 0
  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    let potential = sum - k
    if (hashT.get(potential) > 0) {
      result += hashT.get(potential)
    }

    if (hashT.get(sum) > 0) {
      const count = hashT.get(sum)
      hashT.set(sum, count + 1)
    } else hashT.set(sum, 1)
  }

  return result
}
