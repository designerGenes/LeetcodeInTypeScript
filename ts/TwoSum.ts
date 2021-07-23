/**
 * Two Sum
 * Given an array of integers nums and an integer target,
 *
 * return indices of the two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 *
 * [2,7,11,15] , 9 = [0, 1]
 * [3,2,4], 6 = [1, 2]
 */

export const twoSum = (nums: number[], target: number): number[] => {
  // [0, 1, 4, 3, 2], 7

  let l = 0;
  while (l < nums.length - 1) {
    let r = l + 1;
    while (r < nums.length) {
      if (nums[l] + nums[r] == target) {
        return [l, r];
      }
      r += 1;
    }
    l += 1;
  }

  return [];
};

export const fasterTwoSum = (nums: number[], target: number): number[] => {
  let dictMap = {};
  for (let x in nums) {
    const key = nums[x];
    const distance = target - nums[x];

    if (dictMap[distance] !== undefined) {
      return [x, dictMap[distance].idx];
    }

    dictMap[key] = { distance, idx: x };
  }

  for (let key in nums) {
    const remainder = dictMap[key].distance;
    if (dictMap[remainder] !== null) {
      return [key, dictMap[remainder].idx];
    }
  }

  return [];
};
