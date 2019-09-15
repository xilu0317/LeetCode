// The key is to define a good comparator
const comparator = (a, b) => {
    let aRest = a.substring(a.indexOf(' ') + 1);
    let bRest = b.substring(b.indexOf(' ') + 1);

    if (aRest > bRest) {
        return 1;
    } else if (aRest < bRest) {
        return -1;
    }

    // when aRest and bRest are equal only then sort the keys
    let aBefore = a.substring(0, a.indexOf('_') + 1);
    let bBefore = b.substring(0, b.indexOf('_') + 1);

    if (aBefore > bBefore) {
        return -1;
    } else {
        return 1;
    }
};

// key idea: split the array into two and then do a custom sort
const reorderLogFiles = (logs) => {
    let letterList = [];
    let digitList = [];

    for (let log of logs) {
        // this is smart: looking at the last char to determine if the file is a digit file or string file
        let isDigit = !isNaN(log[log.length - 1]);
        if (isDigit) {
            digitList.push(log);
        } else {
            letterList.push(log);
        }
    }

    letterList.sort(comparator);

    return [...letterList, ...digitList];
};
