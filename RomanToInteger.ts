const values = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

interface BullyPeer {
  char: string;
  value: number;
}

class Numeral {
  numValue: number;
  bullyPeers: BullyPeer[];
  char: string;

  constructor(char: string) {
    this.char = char;
    this.numValue = values[char.toUpperCase()];
    switch (char) {
      case "I":
        this.bullyPeers = [
          { char: "V", value: 4 },
          { char: "X", value: 9 },
        ];
        break;
      case "X":
        this.bullyPeers = [
          { char: "C", value: 90 },
          { char: "L", value: 40 },
        ];
        break;
      case "C":
        this.bullyPeers = [
          { char: "D", value: 400 },
          { char: "M", value: 900 },
        ];
    }
  }
}

function romanToInt(s: string): number {
  return 0; // TMP!
}

const sliceUpString = (s: string): Numeral[] => {
  let sliceArr: Numeral[] = [];
  while (s.length) {
    let curChar = s.charAt(0);

    let numeral = new Numeral(curChar);
    if (s.length < 2) {
      sliceArr.push(numeral);
      break;
    }

    for (let x = 1; x < s.length; x++) {
      let nextChar = s.charAt(x);
      if (nextChar == curChar) {
        // proceed
      } else {
        for (let b in numeral.bullyPeers) {
          let bully: BullyPeer = numeral.bullyPeers[b];
          if (nextChar == bully.char) {
            // reached stops
          }
        }
      }
    }
  }

  return sliceArr;
};

// split into segments
// add segments together as digits and convert to number
