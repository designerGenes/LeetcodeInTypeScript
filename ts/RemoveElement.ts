/**
 * Given an integer array nums and an integer val,
 *
 * 1. remove all occurrences of val in nums in-place.
 *
 * The relative order of the elements may be changed.
 * Since it is impossible to change the length of the array in some languages, you must instead
 *
 * 2. have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
 * It does not matter what you leave beyond the first k elements.
 * Return k after placing the final result in the first k slots of nums.
 * Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory
 */

// return number of removed
// ex: [1, 2, 3, 4, 5]

// NOTE: Leetcode says this answer is incorrect, but their expected output
// does not seem to match the described expectation

let arr = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;
function removeElement(nums: number[], val: number): number {
  let counter = 0;
  let countOfShifted = 0;
  while (counter < nums.length - countOfShifted) {
    if (nums[counter] == val) {
      let shifting = nums.splice(counter, 1)[0];
      nums.push(shifting);
      countOfShifted += 1;
      continue;
    }
    counter += 1;
  }

  return countOfShifted;
}

let j = removeElement(arr, val);
console.log(j);
console.log(arr);
