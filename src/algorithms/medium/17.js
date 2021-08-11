// 17. Letter Combinations of a Phone Number
// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

const letterCombinations = (phoneNumber) => {
  if (phoneNumber.length === 0) {
    return []
  }
  if (phoneNumber.length === 1) {
    return DIGIT_LETTERS[phoneNumber]
  }

  const result = []
  for (const t of letterCombinations(
    phoneNumber.substring(0, phoneNumber.length - 1)
  )) {
    for (const letter of DIGIT_LETTERS[
      phoneNumber.substring(phoneNumber.length - 1)
    ]) {
      const m = t + letter
      result.push(m)
    }
  }
  return result
}

const DIGIT_LETTERS = {
  0: ['0'],
  1: ['1'],
  2: ['a', 'b', 'c'],
  3: ['d', 'e', 'f'],
  4: ['g', 'h', 'i'],
  5: ['j', 'k', 'l'],
  6: ['m', 'n', 'o'],
  7: ['p', 'q', 'r', 's'],
  8: ['t', 'u', 'v'],
  9: ['w', 'x', 'y', 'z'],
}
