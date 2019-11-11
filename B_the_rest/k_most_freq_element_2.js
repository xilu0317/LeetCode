const topKFrequent = (nums, k) => {
    if (nums === null || k <= 0) return -1

    let dict = {}
    for (let value of nums) {
        if (!dict[value])
            dict[value] = 1
        else
            dict[value]++
    }

    let res = Object.entries(dict)
                    .sort((a, b) => b[1] > a[1])
                    .map(x => x[0])

    res.length = k

    return res
}
