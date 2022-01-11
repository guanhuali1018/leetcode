// 953. Verifying an Alien Dictionary
// https://leetcode.com/problems/verifying-an-alien-dictionary/

const isAlienSorted = (words, order) => {
  if (words.length === 0) return true
  for (let i = 0; i < words.length - 1; i++) {
    const left = words[i]
    const right = words[i + 1]
    let leftIdx = 0
    let rightIdx = 0
    while (leftIdx < left.length && rightIdx < right.length) {
      const leftLetter = left[leftIdx]
      const rightLetter = right[rightIdx]
      if (order.indexOf(leftLetter) < order.indexOf(rightLetter)) break
      if (order.indexOf(leftLetter) > order.indexOf(rightLetter)) return false
      if (order.indexOf(leftLetter) === order.indexOf(rightLetter)) {
        leftIdx++
        rightIdx++
      }
    }

    if (leftIdx !== left.length && rightIdx === right.length) return false
  }

  return true
}
