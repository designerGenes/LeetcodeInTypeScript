// Given a sorted array of distinct integers and a target value, return the index if the target is found.
//If not, return the index where it would be if it were inserted in order.
//You must write an algorithm with O(log n) runtime complexity.

function searchInsert(nums: number[], target: number): number {
    return binarySearch(nums, target);
}

const binarySearch = (nums: number[], target: number, startIdx: number = 0, endIdx: number = nums.length): number => {
    let splitIdx: number = Math.floor((endIdx + startIdx) / 2);
    if (target <= nums[startIdx]) return startIdx;
    if (target > nums[endIdx - 1]) return endIdx;
    if (endIdx - startIdx < 2) {
        return target <= nums[startIdx] ? startIdx : startIdx + 1;
    } else if (nums[splitIdx] == target) {
        return splitIdx;
    } else if (nums[splitIdx] > target) {
        return binarySearch(nums, target, startIdx, splitIdx);
    } else if (nums[splitIdx] < target) {
        return binarySearch(nums, target, splitIdx + 1, endIdx);
    }

    return -1;
};
