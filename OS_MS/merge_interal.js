const merge = (intervals) => {
	if (!intervals) return null;

	if (intervals.length === 0 || intervals.length === 1) return intervals;

	intervals.sort((a,b) => a[0] - b[0]);

	let res = [];
	let blob = [];
	let firstInterval = intervals[0];
	blob.push(firstInterval[0]);
	blob.push(firstInterval[1]);

	for (let i = 1; i < intervals.length; ++i) {
	  let interval = intervals[i];
	  let start = interval[0];
	  let end = interval[1];

	  if (start <= blob[blob.length - 1]) {
		blob.push(end > blob[blob.length - 1] ? end : blob[blob.length - 1])
	  } else {
		res.push([ blob[0], blob[blob.length - 1] ]);
		blob = [];
		blob.push(start);
		blob.push(end);
	  }

	  if ( i === intervals.length - 1) {
		res.push([ blob[0], blob[blob.length - 1] ]);
	  }

	}

	return res;
  };