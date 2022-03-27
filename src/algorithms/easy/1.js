// 1. Two Sum
// https://leetcode.com/problems/two-sum/

const twoSum = (nums, target) => {
  const hashT = {};
  for (let i = 0; i < nums.length; i++) {
    const toFind = target - nums[i];
    if (toFind in hashT) return [hashT[toFind], i];
    hashT[nums[i]] = i;
  }
  return [];
};
