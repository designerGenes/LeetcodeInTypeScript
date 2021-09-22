export const randomInt = (max: number) => {
    return Math.floor(Math.random() * 100000) % max; // not perfect I know
};

export const makeJumpyArr = (size: number, startVal?: number, arr?: number[]): number[] => {
    if (arr?.length == size) return arr;
    arr = arr ?? [];
    startVal = startVal ?? 1;
    let largestVal = arr?.length ? arr[arr.length - 1] : 0;
    let newVal = largestVal + Math.max(startVal, randomInt(9));
    arr.push(newVal);
    return makeJumpyArr(size, startVal, arr);
};

export const shuffle = (arr: number[]): number[] => {
    for (let x of [...Array(arr.length / 2).keys()]) {
        const newIdx = Math.floor(Math.random() * 100) % (arr.length - 1);
        let holder = arr[newIdx];
        arr[newIdx] = arr[x];
        arr[x] = holder;
    }

    return arr;
};
