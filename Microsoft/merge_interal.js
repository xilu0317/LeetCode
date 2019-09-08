const merge = (intervals) => {
    if (!intervals || !intervals.length) return intervals;

    intervals.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);

    let prev = intervals[0];
    let res = [prev];

    for (let cur of intervals) {
        if (cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1])
        } else {
            res.push(cur);
            prev = cur;
        }
    }

    return res;
};