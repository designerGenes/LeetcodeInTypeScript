/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n,
 * representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this,
nums1 has a length of m + n, where the first m elements denote the elements that should be merged,
and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */
export const merge = (nums1, m, nums2, n) => {
    console.log(nums1);
    let numsOut = [];
    if (n < 1) {
        return;
    }
    nums1.splice(m);
    while (nums1.length && nums2.length) {
        if (nums1[0] < nums2[0]) {
            numsOut.push(nums1.shift());
        }
        else if (nums1[0] > nums2[0]) {
            numsOut.push(nums2.shift());
        }
        else {
            numsOut.push(nums1.shift());
            numsOut.push(nums2.shift());
        }
    }
    numsOut = [...numsOut, ...nums1, ...nums2];
    for (let x = 0; x < m + n; x++) {
        nums1[x] = numsOut[x];
    }
    console.log(nums1);
};
//# sourceMappingURL=MergeSortedArray.js.map