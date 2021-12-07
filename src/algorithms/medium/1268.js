// 1268. Search Suggestions System
// https://leetcode.com/problems/search-suggestions-system/

var suggestedProducts = function (products, searchWord) {
  products.sort()
  let typedString = ''
  let output = []
  let temp = []

  for (let i = 0; i < searchWord.length; i++) {
    typedString += searchWord[i]
    for (let j = 0; j < products.length; j++) {
      if (startWith(products[j], typedString)) {
        temp.push(products[j])
      }
      if (temp.length === 3) break
    }
    output.push(temp)
    temp = []
  }

  return output

  function startWith(p, s) {
    let i = 0
    let j = 0
    if (p.length < s.length) return false
    while (i <= p.length - 1 && j <= s.length - 1) {
      if (p[i] !== s[j]) return false
      i++
      j++
    }
    return true
  }
}
