// 380. Insert Delete GetRandom O(1)
// https://leetcode.com/problems/insert-delete-getrandom-o1/

/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.values = []
  this.map = {}
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  const isExist = val in this.map
  if (!isExist) {
    this.map[val] = this.values.length
    this.values.push(val)
    return true
  } else {
    return false
  }
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  const isExist = val in this.map
  if (isExist) {
    if (this.map[val] === this.values.length - 1) {
      this.values.pop()
      delete this.map[val]
    } else {
      let idxToDelete = this.map[val]
      let lastIdx = this.map[this.values[this.values.length - 1]]

      let temp = this.values[idxToDelete]
      this.values[idxToDelete] = this.values[this.values.length - 1]
      this.values[this.values.length - 1] = temp

      this.map[this.values[idxToDelete]] = idxToDelete

      this.values.pop()
      delete this.map[val]
    }
    return true
  } else {
    return false
  }
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  if (this.values.length === 0) return null
  const idx = Math.floor(Math.random() * this.values.length)
  return this.values[idx]
}
