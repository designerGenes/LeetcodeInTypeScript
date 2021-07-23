export const isSorted = (arr: number[]): boolean => {
  var highestSoFar = 0;
  for (let val in arr) {
    if (arr[val] < highestSoFar) {
      return false;
    }
    highestSoFar = arr[val];
  }
  return true;
};

export const randomizedNumericList = (count: number, keepTight: boolean): number[] => {
  let out: number[] = [];
  if (count < 1) return out;

  if (keepTight) {
    // numbers when sorted will be like 1, 2, 3, 4...
    let drawArr = new Array(count).fill(undefined).map((_, i) => i);
    while (drawArr.length) {
      let rnd = Math.floor(Math.random() * drawArr.length);
      out.push(drawArr.splice(rnd, 1)[0]);
    }
  } else {
    // numbers when sorted will be like 1, 9, 15, 16
    out.push(Math.floor(Math.random() * 100));
    while (out.length < count) {
      const delta = Math.floor(Math.random() * 100);
      out.push(out[out.length - 1] + delta);
    }
    for (let x = 0; x < out.length; x++) {
      let newPos = Math.floor(Math.random() * out.length);
      let holder = out[newPos];
      out[newPos] = out[x];
      out[x] = holder;
    }
  }
  return out;
};
