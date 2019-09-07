const merge = (intervals) => {
	if (!intervals) return null;

	if (intervals.length === 0 || intervals.length === 1) return intervals;

	// *Important* sort based on the starting time
	intervals.sort((a, b) => a[0] - b[0]);

	let res = [];
	let merged = [];
	// add first element so the rest have something to compare
	let firstInterval = intervals[0];
	merged.push(firstInterval[0]);
	merged.push(firstInterval[1]);

	for (let i = 1; i < intervals.length; ++i) {
		let interval = intervals[i];
		let start = interval[0];
		let end = interval[1];

		if (start <= merged[merged.length - 1]) {
			merged.push(end > merged[merged.length - 1] ? end : merged[merged.length - 1])
		} else {
			res.push([merged[0], merged[merged.length - 1]]);
			// re-init the merged array
			merged = [];
			merged.push(start);
			merged.push(end);
		}

		// handle the last pari
		if (i === intervals.length - 1) {
			res.push([merged[0], merged[merged.length - 1]]);
		}

	}

	return res;
};