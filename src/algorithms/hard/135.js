// 135. Candy
// https://leetcode.com/problems/candy/

const candy = (ratings) => {
  const rewards = ratings.map(() => 1)

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) rewards[i] = rewards[i - 1] + 1
  }
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1])
      rewards[i] = Math.max(rewards[i], rewards[i + 1] + 1)
  }

  return rewards.reduce((a, b) => a + b)
}
