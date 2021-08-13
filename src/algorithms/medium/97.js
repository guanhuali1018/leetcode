// 97. Interleaving String
// https://leetcode.com/problems/interleaving-string/

const isInterleave = (s1, s2, s3) => {
  if (s3.length !== s1.length + s2.length) return false
  const cache = new Array(s1.length + 1)
    .fill(0)
    .map(() => new Array(s2.length + 1).fill(null))

  return isInterleaveHelper(s1, s2, s3, 0, 0, cache)
}

const isInterleaveHelper = (s1, s2, s3, i, j, cache) => {
  if (cache[i][j] !== null) return cache[i][j]
  const k = i + j
  if (k === s3.length) return true

  if (i < s1.length && s1[i] === s3[k]) {
    cache[i][j] = isInterleaveHelper(s1, s2, s3, i + 1, j, cache)
    if (cache[i][j]) return cache[i][j]
  }

  if (j < s2.length && s2[j] === s3[k]) {
    cache[i][j] = isInterleaveHelper(s1, s2, s3, i, j + 1, cache)
    if (cache[i][j]) return cache[i][j]
  }
  cache[i][j] = false
  return cache[i][j]
}
