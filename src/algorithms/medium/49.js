// 49. Group Anagrams
// https://leetcode.com/problems/group-anagrams/

const groupAnagrams = (words) => {
  const anagrams = {}
  for (const word of words) {
    const sorted = word.split('').sort().join('')
    if (sorted in anagrams) {
      anagrams[sorted].push(word)
    } else {
      anagrams[sorted] = [word]
    }
  }
  return Object.values(anagrams)
}
