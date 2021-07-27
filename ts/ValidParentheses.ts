let brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
};

function isValid(parentheticalString: string): boolean {
    console.log(`${parentheticalString} is ${parentheticalString.length} characters long`);
    if (parentheticalString.length % 2 != 0) {
        return false;
    }
    while (parentheticalString.length) {
        let currentChar = parentheticalString.charAt(0);
        if (!["{", "(", "["].includes(currentChar)) {
            return false;
        }

        // get first index of counterpart
        let rIdx = parentheticalString.indexOf(brackets[currentChar]);
        console.log(`found counterpoint at ${rIdx} which is ${parentheticalString.charAt(rIdx)}`);
        if (rIdx % 2 == 0) {
            // pos should be 1, 3, 5, etc for () or [[{}]]
            return false;
        }
        for (let x = 0; x < rIdx; x++) {
            if (parentheticalString.charAt(x) !== parentheticalString.charAt(rIdx - x)) {
                return false;
            }
        }
        // cut and continue
        parentheticalString = parentheticalString.substring[rIdx + 1];
        console.log(parentheticalString);
    }

    return true;
}

// UNFINISHED
