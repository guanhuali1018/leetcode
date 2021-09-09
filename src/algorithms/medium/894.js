// 894. All Possible Full Binary Trees
// https://leetcode.com/problems/all-possible-full-binary-trees/

const allPossibleFBT = (N) => {
  if (N % 2 === 0) return []
  if (N === 1) return [new TreeNode(0)]

  let trees = []
  for (let i = 1; i <= N - 2; i += 2) {
    let leftTrees = allPossibleFBT(i)
    let rightTrees = allPossibleFBT(N - 1 - i)
    leftTrees.forEach((lt) => {
      rightTrees.forEach((rt) => {
        let root = new TreeNode(0)
        root.left = lt
        root.right = rt
        trees.push(root)
      })
    })
  }
  return trees
}
