// 72. Edit Distance
// https://leetcode.com/problems/edit-distance/

const minDistance = (word1, word2) => {
  const edits = []
  for (let i = 0; i < word2.length + 1; i++) {
    const row = []
    for (let j = 0; j < word1.length + 1; j++) {
      row.push(j)
    }
    row[0] = i
    edits.push(row)
  }
  for (let i = 1; i < word2.length + 1; i++) {
    for (let j = 1; j < word1.length + 1; j++) {
      if (word2[i - 1] === word1[j - 1]) {
        edits[i][j] = edits[i - 1][j - 1]
      } else {
        edits[i][j] =
          1 + Math.min(edits[i - 1][j - 1], edits[i - 1][j], edits[i][j - 1])
      }
    }
  }
  return edits[word2.length][word1.length]
}
