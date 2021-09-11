// 981. Time Based Key-Value Store
// https://leetcode.com/problems/time-based-key-value-store/

/**
 * Initialize your data structure here.
 */

// {
//     key1: {t1: v1, t2: v2},
//     key2: {t1: v1, t2: v2}
// }

var TimeMap = function () {
  this.obj = {}
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (key in this.obj) {
    const vObj = this.obj[key]
    vObj[timestamp] = value
  } else {
    this.obj[key] = {}
    this.obj[key][timestamp] = value
  }
}

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!key in this.obj) return ''
  const vObj = this.obj[key]
  if (!vObj || !timestamp in vObj) return '' // 注意检查vObj是否存在(undefined)
  while (timestamp > 0) {
    if (this.obj[key][timestamp]) return this.obj[key][timestamp]
    timestamp--
  }
  return ''
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
