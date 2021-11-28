// 1353. Maximum Number of Events That Can Be Attended
// https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/

const maxEvents = function(events) {
  events.sort((b, a) => a[0] < b[0] ? 1 : -1)
  
  let i = 0, res = 0, d = 0, n = events.length, pq = []
  
  var find = (val) => {
    let l = 0, r = pq.length - 1, mid
    while (l < r) {
      mid = Math.trunc((l + r) / 2)
      if (val == pq[mid]) return mid
      else if (val < pq[mid]) r = mid
      else l = mid + 1
    }
    return pq[l] < val ? l + 1 : l
  }
  
  while (pq.length || i < n) {
    if (pq.length == 0)
      d = events[i][0]
    while (i < n && events[i][0] <= d) {
      let index = find(events[i][1])
      pq.splice(index, 0, events[i++][1])
    }
    pq.shift()
    ++res
    ++d
    while (pq.length && pq[0] < d)
      pq.shift()
  }
  return res
}
