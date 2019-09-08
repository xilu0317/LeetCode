// cur => current interval
// prev => previous interval
// hint: order the intervals by their starting time

const merge = (intervals) => {
    if (!intervals || !intervals.length) return [];

    // key step
    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    // put the first interval into `res`
    const res = [prev];

    for (const cur of intervals) {
        // If the starting position of the current is less than or equal to the ending of the previous
        if (cur[0] <= prev[1]) {
            // then update the previous ending to be whichever to be larger
            prev[1] = Math.max(prev[1], cur[1])
        } else {
            // If it is a non-touching interval, append it to the result set
            res.push(cur);
            // Update the pointer!
            prev = cur;
        }
    }

    return res;
};