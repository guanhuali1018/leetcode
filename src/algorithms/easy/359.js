// 359. Logger Rate Limiter
// https://leetcode.com/problems/logger-rate-limiter/

var Logger = function () {
  this.cache = {}
}

/**
 * @param {number} timestamp
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function (timestamp, message) {
  if (!(message in this.cache)) {
    this.cache[message] = 10 + timestamp
    return true
  } else {
    if (timestamp >= this.cache[message]) {
      this.cache[message] = 10 + timestamp
      return true
    }
    return false
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
