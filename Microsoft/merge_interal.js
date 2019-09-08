const merge = (intervals) => {
    if (!intervals || !intervals.length) return intervals;

    // key: sort by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    const res = [prev];

    for (const cur of intervals) {
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1])
        } else {
            res.push(cur);
            prev = cur;
        }
    }

    return res;
};