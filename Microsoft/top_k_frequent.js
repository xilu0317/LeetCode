const comp = (a, b) => {
    // descending count
    if (b[1] > a[1]) return 1
    if (a[1] > b[1]) return -1

    // If the count is equal then order alphabetically

    // ascending alphabetically
    if (a[0] > b[0]) return 1
    if (a[0] < b[0]) return -1
    if (a[0] === b[0]) return 0
}

// Note maybe need to consider priority queue
const topKFrequent = (words, k) => {
    if (!words || k <= 0) return -1

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
