const longestPalindrome = (s) => {
	const n = s.length;
	let res = '';

	const dp = Array(n).fill()
		               .map(() => Array(n).fill(false));

	for (let i = n - 1; i >= 0; i--) {
		for (let j = i; j < n; j++) {
			dp[i][j] = (s[i] === s[j]) && (j - i < 3 || dp[i + 1][j - 1]);

			if (dp[i][j] && (!res || j - i + 1 > res.length)) {
				res = s.substring(i, j + 1);
			}
		}
	}

	return res;
};