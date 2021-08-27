"use strict";
// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
//
// A word is a maximal substring consisting of non-space characters only.
function lengthOfLastWord(s) {
    s.trimEnd();
    const matches = s.match(/\s*\w+/g);
    if (matches.length) {
        let lastMatch = matches[matches.length - 1].trim();
        console.log(lastMatch);
        return lastMatch.length;
    }
}
const testOne = "a big brown   bear sat  upon a zzummifoo.";
const testTwo = " a ";
console.log(lengthOfLastWord(testTwo));
//# sourceMappingURL=LengthOfLastWord.js.map