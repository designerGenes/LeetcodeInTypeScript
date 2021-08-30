"use strict";
// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.
function searchInsert(nums, target) {
    return binarySearch(nums, target);
}
const binarySearch = (nums, target, startIdx = 0, endIdx = nums.length) => {
    let splitIdx = Math.floor((endIdx + startIdx) / 2);
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
//# sourceMappingURL=SearchInsertPosition.js.map