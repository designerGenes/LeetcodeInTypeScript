const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};
export default (raw: string): number => {
  let total = 0;
  while (raw.length) {
    let focusChar = raw.charAt(0).toUpperCase();
    let adjust: number = values[focusChar];
    if (raw.charAt(1) !== "undefined") {
      let nextVal: number = values[raw.charAt(1).toUpperCase()];
      if (nextVal > adjust) {
        adjust *= -1;
      }
    }
    total += adjust;
    raw = raw.substring(1);
  }

  return total;
};

// const string1 = "MMCLI";
// const string2 = "CCCIV";

// [string1, string2].forEach((val, idx) => console.log(`exp ${idx} says = ${val} and equals ${romanToInteger(val)}`));
