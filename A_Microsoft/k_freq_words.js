// This is the most important part!
const comp = (a, b) => {
    // descending order
    if (b[1] > a[1]) return 1
    if (b[1] < a[1]) return -1

    // intentionally leaving out the case when a[1] === b[1]

    // ascending order
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    if (a[0] === b[0]) return 0
}

const topKFrequent = (words, k) => {
    if (words === null || k <= 0) return -1

    let dict = {}
    for (let word of words) {
        if (!dict[word])
            dict[word] = 1
        else
            dict[word]++
    }

    let res = Object.entries(dict)
                    .sort(comp)
                    .map(x => x[0])

    res.length = k

    return res
}
