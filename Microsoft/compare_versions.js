const compareVersion = (v1, v2) => {
    if (!v1 && !v2) return 0;
    if (!v1) return -1;
    if (!v2) return 1;

    // use parseInt for numerical comparison
    let l1 = v1.split(/\./).map(x => parseInt(x));
    let l2 = v2.split(/\./).map(x => parseInt(x));

    let len1 = l1.length, len2 = l2.length
    let minLen = Math.min(len1, len2), maxLen = Math.max(len1, len2);

    // note 'i' is intentionally outside
    let i;
    for (i = 0; i < minLen; i++) {
        if (l1[i] > l2[i])
            return 1;
        if (l1[i] < l2[i])
            return -1
    }

    // Now comparison has completed for two, as long as one > 0 will be larger
    while (i < maxLen) {
        if (l1[i] > 0)
            return 1;
        if (l2[i] > 0)
            return -1;
        // Don't forget i++
        i++;
    }

    return 0;
};
