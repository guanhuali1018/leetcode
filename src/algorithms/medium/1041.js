// 1041. Robot Bounded In Circle
// https://leetcode.com/problems/robot-bounded-in-circle/

const isRobotBounded = (instructions) => {
  // directions: [0,1] [1,0] [0,-1] [-1,0] => NESW

  const dir = [0, 1] // initialized direction to N
  let x = 0
  let y = 0
  for (const ins of instructions) {
    if (ins === 'G') {
      x += dir[0]
      y += dir[1]
    } else if (ins === 'L') {
      const temp = dir[0]
      dir[0] = -dir[1]
      dir[1] = temp
    } else if (ins === 'R') {
      const temp = dir[0]
      dir[0] = dir[1]
      dir[1] = -temp
    }
  }
  return (x === 0 && y === 0) || !(dir[0] === 0 && dir[1] === 1)
}

// const result = isRobotBounded('GLGLGGLGL')
// console.log(result)
