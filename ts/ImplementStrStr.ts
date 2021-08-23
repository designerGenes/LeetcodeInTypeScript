// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

function strStr(haystack: string, needle: string): number {
    if (needle.length < 1) {
        return 0;
    }
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        let allCharsMatch = true;
        if (haystack.charAt(i) === needle.charAt(0)) {
            let counter = 1;
            for (let g = i + needle.length - 1; g > i; --g) {
                let rightChar = haystack.charAt(g);
                let compareChar = needle.charAt(needle.length - counter);
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
