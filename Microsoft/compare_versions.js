const compareVersion = (v1, v2) => {
    let l1 = v1.split('.').map(x => parseInt(x))
    let l2 = v2.split('.').map(x => parseInt(x))

    let len1 = l1.length, len2 = l2.length
    let minLen = Math.min(len1, len2), maxLen = Math.max(len1, len2)

    let i = 0
    while (i < minLen) {
        if (l1[i] > l2[i])
            return 1
        if (l1[i] < l2[i])
            return -1
        i++
    }

    // Now comparison has completed for two, as long as one > 0 will be larger
    while (i < maxLen) {
        if (l1[i] > 0)
            return 1
        if (l2[i] > 0)
            return -1
        i++
    }

    return 0
}
