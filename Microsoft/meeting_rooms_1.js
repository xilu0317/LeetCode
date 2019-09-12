// hint: draw a fking diagram
const canAttendMeetings = (intervals) => {
    // Returning true here is per spec
    if (!intervals || !intervals.length) return true;

    intervals.sort((a, b) => a[0] - b[0]);

    let prev = intervals[0];
    // Do not use for-of because of the index starts at 1
    for (let i = 1; i < intervals.length; i++) {
        cur = intervals[i];

        if (cur[0] < prev[1]) return false;

        prev = cur;
    }

    return true;
};
