/**
 * @param {number[][]} intervals
 * @return {number}
 */
// TODO: revisit
const minMeetingRooms = (intervals) => {
    let len = intervals.length;
    let starts = [];
    let ends = [];

    for (let interval of intervals) {
        starts.push(interval[0]);
        ends.push(interval[1]);
    }

    // KEY
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let rooms = 0, j = 0;
    for (let i = 0; i < len; i++) {
        if (starts[i] < ends[j])
            rooms++;
        else
            j++;
    }

    return rooms;
};