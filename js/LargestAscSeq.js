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
export default (arr) => {
    let sequences = splitIntoSequences(arr);
    // find biggest
    let totals = sequences.map((seq) => seq.reduce((sum, nextVal) => sum + nextVal));
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
//# sourceMappingURL=LargestAscSeq.js.map