// KEY: come up with a good comp
const comp = (a, b) => {
    // look for the first space
    let aIndex = a.indexOf(' '), bIndex = b.indexOf(' ');

    let aRest = a.substring(aIndex + 1);
    let bRest = b.substring(bIndex + 1);

    if (aRest > bRest)
        return 1;
    if (aRest < bRest)
        return -1;

    let aBefore = a.substring(0, aIndex + 1);
    let bBefore = b.substring(0, bIndex + 1);

    if (aBefore > bBefore)
        return 1;
    else
        return -1;
};

const reorderLogFiles = (logs) => {
    let letterList = [], digitList = [];

    for (let log of logs) {
        // this is smart: looking at the last char to determine if the file is a digit file or string file
        let isDigit = !isNaN(log[log.length - 1]);
        if (isDigit)
            digitList.push(log);
        else
            letterList.push(log);
    }

    letterList.sort(comp);

    return [...letterList, ...digitList];
};
