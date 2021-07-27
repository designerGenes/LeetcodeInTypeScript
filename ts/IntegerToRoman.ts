const digitMap = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
};

// break 1590 into 1000, 500, 90, 0
// count number of digits, isolate each and multiply by 10^position in total integer

const numberAsComponents = (rawInt: number): number[] => {
    let components: number[] = [];
    let stringOfOriginal = rawInt.toString();
    for (let y = stringOfOriginal.length - 1; y >= 0; y--) {
        let digit = parseInt(stringOfOriginal.charAt(y));
        if (y == stringOfOriginal.length - 1) {
            components.push(digit);
            continue;
        }

        let multip = 10 ** (stringOfOriginal.length - 1 - y);
        components.push(digit * multip);
    }
    components.reverse();

    return components;
};

// const romanNumeralRep = (position: number, quantity: number): string => {
//     let numeralRep = digitMap[position].repeat(quantity);
//     let numeralIdx = 0;
//     let rounderChar = "";
//     if (quantity == 4 && position > 0) {
//         rounderChar = order;
//     } else if (quantity == 9 && position > 0) {
//     }

//     return "";
// };

// const integerToRoman = (rawInt: number): string => {
//     if (number > 9999) {
//         return "too big for single Roman Numeral expression";
//     }
//     let components = numberAsComponents(rawInt);
//     let romanNumeralString = "";

//     for (let x = components.length - 1; x >= 0; x--) {
//         let component = components[x];
//     }

//     return romanNumeralString;
// };

// let splitNum = 5432;
// console.log(numberAsComponents(splitNum));
