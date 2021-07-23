// return largest number in list or 0 if empty
export default (numbers: number[]): number => {
  if (!numbers.length) return 0;

  let largest = 0;
  numbers.forEach((val, idx) => {
    if (val > largest) {
      largest = val;
    }
  });

  return largest;
};
