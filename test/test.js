const wordBreak = (s, wordDict) => {
	let q = [];
	let n = s.length;
	let visited = new Set();

	q = [0];
	while (q.length) {
		let i = q.shift();
		if (!visited.has(i)) {
			visited.add(i);
			for (let word of wordDict) {
				let m = word.length;
				if (i + m <= s.length && s.substring(i, i + m) === word) {
					if (i + m === n) {
						return true;
					}
					q.push(i + m);
				}
			}
		}
	}
	return false;
};


wordBreak('leetcode', ['leet', 'code'])