// TODO: revisit
const minMeetingRooms = (intervals) => {
    let starts = [], ends = []

    // create two list
    for (let interval of intervals) {
        starts.push(interval[0])
        ends.push(interval[1])
    }

    // KEY: numerical sort
    starts.sort((a, b) => a - b)
    ends.sort((a, b) => a - b)

    let rooms = 0, j = 0
    for (let i = 0; i < intervals.length; i++) {
        if (starts[i] < ends[j])
            rooms++
        else
            j++
    }

    return rooms
}
