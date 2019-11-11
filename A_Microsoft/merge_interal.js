// hint: order the intervals by their starting time

const merge = (intervals) => {
    if (!intervals || !intervals.length) return []

    // KEY: sort by starting point
    intervals.sort((a, b) => a[0] - b[0])

    let prev = intervals[0]
    let res = [prev]

    for (let cur of intervals) {
        // Overlapping between cur start and prev end
        if (cur[0] <= prev[1]) {
            // take whichever is larger and assign to prev
            prev[1] = Math.max(prev[1], cur[1])
        } else {
            // If non-touching, add it to the result set
            res.push(cur)
            // don't forget to update the pointer
            prev = cur
        }
    }

    return res
}

// Annotation:
// cur => current interval
// prev => previous interval
