/**
 * @param {number[][]} intervals
 * @return {number}
 */
// TODO: revisit
const minMeetingRooms = (intervals) => {
    let len = intervals.length;
    let starts = Array(len).fill(0);
    let ends = Array(len).fill(0);

    for (let i = 0; i < len; i++) {
        // '0' means start
        starts[i] = intervals[i][0];
        // '1' means end
        ends[i] = intervals[i][1];
    }

    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);

    let rooms = 0, j = 0;
    for (let i = 0; i < starts.length; i++) {
        if (starts[i] < ends[j])
            rooms++;
        else
            j++;
    }

    return rooms;
};
