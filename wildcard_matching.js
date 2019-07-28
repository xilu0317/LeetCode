/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (str, pattern) => {
	let s = 0, p = 0, match = 0, starIndex = -1;

	while (s < str.length) {
		if (p < pattern.length && (pattern[p] === '?' || str[s] === pattern[p])) {
			s++;
			p++;
		} else if (p < pattern.length && pattern[p] === '*') {
			starIndex = p;
			match = s;
			p++; // If `*` is found, only advance pattern pointer
		} else if (starIndex !== -1) {
			p = starIndex + 1;
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
