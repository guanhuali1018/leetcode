// 217. Contains Duplicate
// https://leetcode.com/problems/contains-duplicate/

const containsDuplicate = function (nums) {
  const map = {}

  for (const n of nums) {
    if (n in map) {
      return true
    } else map[n] = true
  }

  return false
}
