/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (str, pattern) => {
	// s = index for str
	// p = index for pattern

	// starSaveIndex = index for star in the pattern
	let s = 0, p = 0, match = 0, starSaveIndex = -1;

	while (s < str.length) {
		if (p < pattern.length && (pattern[p] === '?' || pattern[p] === str[s])) {
			s++;
			p++;
		} else if (p < pattern.length && pattern[p] === '*') {
			starSaveIndex = p;
			p++; // If `*` is found, only advance pattern pointer
			match = s;
		} else if (starSaveIndex !== -1) {
			p = starSaveIndex + 1;
			match++;
			s = match; // If the last pattern pointer is `*`, then advance string pointer
		} else {
			return false;
		}
	}

	//Check for remaining characters in the pattern
	while (p < pattern.length && pattern[p] === '*') {
		p++;
	}

	return p === pattern.length;
};
