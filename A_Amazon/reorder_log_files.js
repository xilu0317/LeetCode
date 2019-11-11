const reorderLogFiles = (logs) => {
    let letterList = [], digitList = []

    for (let log of logs) {
        // because of uniformity, just need to check if the last char is a number or not
        let isDigit = !isNaN(log[log.length - 1])
        if (isDigit)
            digitList.push(log)
        else
            letterList.push(log)
    }

    letterList.sort(comp)

    return [...letterList, ...digitList]
}

// KEY: come up with a good comp
const comp = (a, b) => {
    // look for the first space
    let aIndex = a.indexOf(' '), bIndex = b.indexOf(' ')
    let aRest = a.substring(aIndex), bRest = b.substring(bIndex)

    // lexicographical comparison of the contents
    if (aRest > bRest)
        return 1
    if (aRest < bRest)
        return -1

    // if the contents are of tie, then the identifiers need to be ordered lexicographically
    let aFirst = a.substring(0, aIndex), bFirst = b.substring(0, bIndex)

    if (aFirst > bFirst)
        return 1
    else
        return -1
}
