// 1481. Least Number of Unique Integers after K Removals
// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

var findLeastNumOfUniqueInts = function (arr, k) {
  let hash = {}
  for (const i of arr) {
    if (i in hash) {
      hash[i]++
    } else hash[i] = 1
  }
  arr.sort((a, b) => a - b)
  const keys = Object.keys(hash).sort((a, b) => hash[a] - hash[b])

  let newArr = []
  for (let i = 0; i < keys.length; i++) {
    let j = hash[keys[i]]
    while (j > 0) {
      newArr.push(keys[i])
      j--
    }
  }

  let hashT = {}
  let res = 0
  newArr = newArr.slice(k)
  for (const i of newArr) {
    if (i in hashT) {
      hashT[i]++
    } else {
      hashT[i] = 1
      res++
    }
  }
  return res
}
