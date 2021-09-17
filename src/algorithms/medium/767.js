// 767. Reorganize String
// https://leetcode.com/problems/reorganize-string/

const reorganizeString = (s) => {
  let hash = {}
  for (let c of s) hash[c] = hash[c] + 1 || 1

  let sort = Object.keys(hash).sort((a, b) => hash[b] - hash[a])
  let res = []
  let index = 0

  for (let i = 0; i < sort.length; i++) {
    let occur = hash[sort[i]]
    if (occur > parseInt((s.length + 1) / 2)) {
      return ''
    }

    for (let j = 0; j < occur; j++) {
      if (index >= s.length) index = 1
      res[index] = sort[i]
      index += 2
    }
  }

  return res.join('')
}
