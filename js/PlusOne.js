"use strict";
/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */
function plusOne(digits) {
    return _plusOne(digits);
}
// [1, 3, 2, 0, 9, 2, 9]
function _plusOne(digits, startIdx = 0) {
    let x = digits.length - 1;
    let bump = false;
    console.log(`${digits}`);
    while (x >= 0) {
        if (bump == true || x == digits.length - 1) {
            digits[x] += 1;
            bump = false;
            if (digits[x] > 9) {
                bump = true;
                digits[x] = 0;
                if (x == 0) {
                    digits.unshift(1);
                }
            }
        }
        x--;
    }
    console.log(`${digits}`);
    return digits;
}
let myArr = [9];
console.log(`${myArr}`);
let plusOneArr = _plusOne(myArr);
//# sourceMappingURL=PlusOne.js.map