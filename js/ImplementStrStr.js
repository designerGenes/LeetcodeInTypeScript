"use strict";
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
function strStr(haystack, needle) {
    if (haystack.length < 1) {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let allCharsMatch = true;
        // console.log(`examining (${haystack.charAt(i)})`);
        if (haystack.charAt(i) === needle.charAt(0)) {
            let counter = 1;
            for (let g = i + needle.length - 1; g > i; --g) {
                // console.log(`i: ${i} g: ${g}`);
                let rightChar = haystack.charAt(g);
                let compareChar = needle.charAt(needle.length - counter);
                // console.log(`\t (${rightChar} vs ${compareChar})`);
                if (rightChar !== compareChar) {
                    allCharsMatch = false;
                    break;
                }
                counter++;
            }
            if (allCharsMatch) {
                return i;
            }
        }
    }
    return -1;
}
// console.log(strStr("honsterhamsteramsterdam", "amster"));
// console.log(strStr("hello", "ll"));
// console.log(strStr("", ""));
console.log(strStr("aaaaa", "bba"));
//                  012345678
/// hamster
//  amst
//# sourceMappingURL=ImplementStrStr.js.map