/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

const isMatch = (str, pattern) => {
	// s = index for str
	// p = index for pattern

	// starSaveIndex = index for the star in the pattern
	let s = 0, p = 0, match = 0, starSaveIndex = -1;

	while (s < str.length) {
		if ((pattern[p] === '?' || pattern[p] === str[s]) && p < pattern.length) {
			s++;
			p++;
		} else if (pattern[p] === '*' && p < pattern.length) {
			starSaveIndex = p;
			p++;
			match = s; // Save the current pos of the string
		} else if (starSaveIndex !== -1) { // If the previous pattern index is `*`
			p = starSaveIndex + 1; // Then advance string pointer
			match++;
			s = match; // Extract the next pos of the string
		} else {
			return false;
		}
	}

	// Check for remaining characters in the pattern
	while (p < pattern.length && pattern[p] === '*') {
		p++;
	}

	return (p === pattern.length);
};
