// MergeSort

export const merge = (l: number[], r: number[]): number[] => {
    let arr: number[] = [];
    while (l.length && r.length) {
        if (l[0] > r[0]) {
            arr.push(r.shift());
        } else {
            arr.push(l.shift());
        }
    }

    return [...arr, ...l, ...r];
};

export const mergeSort = (arr: number[]): number[] => {
    if (arr.length < 2) {
        return arr;
    }
    let left = arr.splice(0, arr.length / 2);

    return merge(mergeSort(left), mergeSort(arr));
};
