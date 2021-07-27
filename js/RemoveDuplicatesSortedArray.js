// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element
// appears only once. The relative order of the elements should be kept the same.
let testCase0 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let testCase1 = [1];
export default function (nums) {
    let alreadySeen = {};
    let swappedCount = 0;
    for (var x = 0; x < nums.length - swappedCount; x++) {
        let value = nums[x];
        if (alreadySeen[value] >= 1) {
            let duplicate = nums.splice(x, 1)[0];
            nums.push(0);
            swappedCount += 1;
            x -= 1;
        }
        else {
            alreadySeen[value] = 1;
        }
    }
    const kCount = nums.length - swappedCount;
    return kCount;
}
//# sourceMappingURL=RemoveDuplicatesSortedArray.js.map