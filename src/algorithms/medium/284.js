// 284. Peeking Iterator
// https://leetcode.com/problems/peeking-iterator/

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function (iterator) {
  this.arr = []
  this.index = 0

  while (iterator.hasNext()) {
    this.arr.push(iterator.next())
  }
}

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  console.log(this.index)
  console.log(this.arr[this.index])
  return this.arr[this.index]
}

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  this.index++
  return this.arr[this.index - 1]
}

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  if (this.index >= this.arr.length) return false
  return true
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
