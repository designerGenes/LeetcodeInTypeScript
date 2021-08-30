/**
 * You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
 * The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
 *
 * Increment the large integer by one and return the resulting array of digits.
 */

export const plusOne = (digits: number[]): number[] => {
    let x = digits.length - 1;
    let bump = false;
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
    return digits;
};
