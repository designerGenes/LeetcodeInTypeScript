// Given a string s consisting of some words separated by some number of spaces, return the length of the last word in the string.
//
// A word is a maximal substring consisting of non-space characters only.
export const lengthOfLastWord = (s) => {
    s.trimEnd();
    const matches = s.match(/\s*\w+/g);
    if (matches.length) {
        let lastMatch = matches[matches.length - 1].trim();
        return lastMatch.length;
    }
};
//# sourceMappingURL=LengthOfLastWord.js.map