"use strict";
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.
const binarySearch = (nums, target, startIdx = 0, endIdx = nums.length) => {
    let splitIdx = Math.floor((endIdx + startIdx) / 2);
    console.log(`slice: [${nums.slice(startIdx, endIdx)}]`);
    if (target <= nums[startIdx])
        return startIdx;
    if (target > nums[endIdx - 1])
        return endIdx;
    if (endIdx - startIdx < 2) {
        return target <= nums[startIdx] ? startIdx : startIdx + 1;
    }
    else if (nums[splitIdx] == target) {
        return splitIdx;
    }
    else if (nums[splitIdx] > target) {
        return binarySearch(nums, target, startIdx, splitIdx);
    }
    else if (nums[splitIdx] < target) {
        return binarySearch(nums, target, splitIdx + 1, endIdx);
    }
    return -1;
};
const _binarySearch = (testObj) => {
    return binarySearch(testObj.set, testObj.target);
};
let nums = { set: [1, 2, 4, 6, 7, 12, 15, 16, 20, 22], target: 14 };
let nums2 = { set: [1, 3], target: 4 };
console.log(_binarySearch(nums2));
//# sourceMappingURL=SearchInsertPosition.js.map