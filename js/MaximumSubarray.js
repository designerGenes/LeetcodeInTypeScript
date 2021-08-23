"use strict";
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
function maxSubArray(nums) {
    let localMax = 0;
    let globalMax = 0;
    for (let x = 0; x < nums.length; x++) {
        localMax = localMax + nums[x];
        if (globalMax < localMax) {
            globalMax = localMax;
        }
        if (localMax < 0) {
            localMax = 0;
        }
    }
    return globalMax;
}
function _maxSubArray(nums, callback) {
    let sequences = [];
    for (let c = 0; c < nums.length; c++) {
        let lSums = [];
        let rSums = [];
        // [0, 1, 2, 3, 4, 5]
        for (let l = c - 1; l >= 0; l--) {
            let actualIdx = c - l - 1; // index in
            if (lSums.length) {
                lSums.push(lSums[actualIdx - 1] + nums[l]);
            }
            else {
                lSums.push(nums[l]);
            }
        }
        for (let r = c + 1; r <= nums.length; r++) {
            let actualIdx = r - c + 1; // index in
            if (rSums.length) {
                rSums.push(rSums[actualIdx - 1] + nums[r]);
            }
            else {
                rSums.push(nums[r]);
            }
        }
        lSums.sort((a, b) => a - b);
        rSums.sort((a, b) => a - b);
        let largestLSum = lSums.pop();
        let largestRSum = rSums.pop();
        let largestIndividualSubseq = nums[c];
        if (largestLSum > 0) {
            largestIndividualSubseq += largestLSum;
        }
        if (largestRSum > 0) {
            largestIndividualSubseq += largestRSum;
        }
        sequences.push(largestIndividualSubseq);
    }
    sequences.sort((a, b) => a - b);
    callback();
    return sequences.pop();
}
const arrOne = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const arrTwo = [5, 4, -1, 7, 8];
const arrThree = [1];
const callback = (startTime) => {
    let diff = process.hrtime(startTime);
    console.log(`Operation took ${diff[0] * 1e9 + diff[1]} nanoseconds`);
};
// let start = process.hrtime();
// console.log(maxSubArray(arrTwo, () => callback(process.hrtime())));
// console.log(maxSubArray(arrThree, () => callback(process.hrtime())));
// console.log(maxSubArray(arrOne, () => callback(process.hrtime())));
//# sourceMappingURL=MaximumSubarray.js.map