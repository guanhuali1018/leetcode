// 973. K Closest Points to Origin
// https://leetcode.com/problems/k-closest-points-to-origin/

const kClosest = (points, k) => {
  points.sort((a, b) => a[0] * a[0] + a[1] * a[1] - (b[0] * b[0] + b[1] * b[1]))
  return points.slice(0, k)
}
