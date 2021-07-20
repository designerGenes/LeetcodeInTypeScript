// MergeSort

const merge = (l: number[], r: number[]): number[] => {
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

const mergeSort = (arr: number[]): number[] => {
  if (arr.length < 2) {
    return arr;
  }
  let left = arr.splice(0, arr.length / 2);

  return merge(mergeSort(left), mergeSort(arr));
};

const isSorted = (arr: number[]): boolean => {
  var highestSoFar = 0;
  for (let val in arr) {
    if (arr[val] < highestSoFar) {
      return false;
    }
    highestSoFar = arr[val];
  }
  return true;
};

const basicUnsorted = [0, 3, 5, 1, 2, 7, 9, 6];
let mergeSorted = mergeSort(basicUnsorted);
console.log(`the test of explsives hhas concluded, you may return to `);
