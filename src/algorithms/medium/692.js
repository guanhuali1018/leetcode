// 692. Top K Frequent Words
// https://leetcode.com/problems/top-k-frequent-words/

var topKFrequent = function (words, k) {
  const hash = {}

  for (const w of words) {
    if (w in hash) {
      hash[w]++
    } else hash[w] = 1
  }

  const keys = Object.keys(hash).sort((a, b) => {
    if (hash[b] !== hash[a]) return hash[b] - hash[a]

    return a > b ? 1 : -1 // important
  })

  console.log(keys)

  return keys.slice(0, k)
}

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log('Promised')
    resolve()
  })
}).then(function () {
  console.log('resolved')
})
console.log('hi')
