// 347. Top K Frequent Elements
// https://leetcode.com/problems/top-k-frequent-elements/

const topKFrequent = (nums, k) => {
  let hash = {}
  let result = []

  for (const n of nums) {
    if (n in hash) {
      hash[n]++
    } else hash[n] = 1
  }

  const keysArr = Object.keys(hash).sort((a, b) => hash[b] - hash[a])

  for (let i = 0; i < k; i++) {
    result.push(keysArr[i])
  }
  return result
}
