// 46. Permutations
// https://leetcode.com/problems/permutations/

const helper = (array, perm, perms) => {
  if (array.length === 0 && perm.length > 0) {
    perms.push(perm)
  } else {
    for (let i = 0; i < array.length; i++) {
      const newArr = array.slice(0, i).concat(array.slice(i + 1))
      const newPerm = perm.concat([array[i]])
      helper(newArr, newPerm, perms)
    }
  }
}

const permute = (nums) => {
  const permutations = []
  helper(nums, [], permutations)
  return permutations
}
