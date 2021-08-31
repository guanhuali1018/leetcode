// 414. Third Maximum Number
// https://leetcode.com/problems/third-maximum-number/

const thirdMax = (array) => {
  const threeLargest = [null, null, null]
  for (const num of array) {
    if (threeLargest.indexOf(num) !== -1) continue
    updateLargest(threeLargest, num)
  }
  if (threeLargest[0] !== null) return threeLargest[0]
  if (threeLargest[0] === null) return threeLargest[2]
}

const updateLargest = (threeLargest, num) => {
  if (threeLargest[2] === null || num > threeLargest[2]) {
    shiftAndUpdate(threeLargest, num, 2)
  } else if (threeLargest[1] === null || num > threeLargest[1]) {
    shiftAndUpdate(threeLargest, num, 1)
  } else if (threeLargest[0] === null || num > threeLargest[0]) {
    shiftAndUpdate(threeLargest, num, 0)
  }
}

const shiftAndUpdate = (array, num, idx) => {
  for (let i = 0; i <= idx; i++) {
    if (i === idx) {
      array[i] = num
    } else {
      array[i] = array[i + 1]
    }
  }
}
