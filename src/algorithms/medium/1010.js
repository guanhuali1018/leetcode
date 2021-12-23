// 1010. Pairs of Songs With Total Durations Divisible by 60
// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

// Brute Force - Time: O(n^2)
var numPairsDivisibleBy60 = function (time) {
  let res = 0

  for (let i = 0; i < time.length - 1; i++) {
    for (let j = i + 1; j < time.length; j++) {
      if ((time[i] + time[j]) % 60 === 0) res++
    }
  }

  return res
}

// function numPairsDivisibleBy60(time) {
//     let mod = {}
//     let counter = 0

//     for (const t of time) {
//         const current = t % 60
//         const toFind = current === 0 ? 0 : 60 - current
//         if (toFind in mod) {
//             counter += mod[toFind]
//         }
//         if (current in mod) {
//             mod[current]++
//         } else {
//             mod[current] = 1
//         }
//     }

//     return counter
// }
