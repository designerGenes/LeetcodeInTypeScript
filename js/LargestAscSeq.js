// from array of numbers, return the largest ascending sequence
let x = [0, 1, 2, 5, 1, 3, 2, 4, 6, 7, 9, 3, 10, 12, 1];
const splitIntoSequences = (arr) => {
    let sequences = [];
    // build sequences
    while (arr.length) {
        let counter = 0;
        if (arr.length < 2) {
            sequences.push(arr.splice(0, arr.length));
            break;
        }
        for (let y of arr) {
            if (counter > 0 && y <= arr[counter - 1]) {
                let sequence = arr.splice(0, counter);
                sequences.push(sequence);
                break;
            }
            counter++;
        }
    }
    return sequences;
};
const largestAscendingSequence = (arr) => {
    let sequences = splitIntoSequences(arr);
    // find biggest
    let totals = sequences.map((seq) => seq.reduce((sum, nextVal) => sum + nextVal));
    console.log(`totals: ${totals}`);
    let largestSum = 0;
    let largestSumIdx = 0;
    totals.forEach((val, x) => {
        if (val > largestSum) {
            largestSum = val;
            largestSumIdx = x;
        }
    });
    return sequences[largestSumIdx];
};
let largestSeq = largestAscendingSequence(x);
console.log(largestSeq);
//# sourceMappingURL=LargestAscSeq.js.map