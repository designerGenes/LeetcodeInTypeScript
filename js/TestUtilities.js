export const randomInt = (max) => {
    return Math.floor(Math.random() * 100000) % max; // not perfect I know
};
export const makeJumpyArr = (size, startVal, arr) => {
    if ((arr === null || arr === void 0 ? void 0 : arr.length) == size)
        return arr;
    arr = arr !== null && arr !== void 0 ? arr : [];
    startVal = startVal !== null && startVal !== void 0 ? startVal : 1;
    let largestVal = (arr === null || arr === void 0 ? void 0 : arr.length) ? arr[arr.length - 1] : 0;
    let newVal = largestVal + Math.max(startVal, randomInt(9));
    arr.push(newVal);
    return makeJumpyArr(size, startVal, arr);
};
export const shuffle = (arr) => {
    for (let x of [...Array(arr.length / 2).keys()]) {
        const newIdx = Math.floor(Math.random() * 100) % (arr.length - 1);
        let holder = arr[newIdx];
        arr[newIdx] = arr[x];
        arr[x] = holder;
    }
    return arr;
};
//# sourceMappingURL=TestUtilities.js.map