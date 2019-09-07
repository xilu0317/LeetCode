const maxSubArray = (nums) => {
	if (!nums || !nums.length) return -1;

	const len = nums.length;
	const dp = Array(len).fill(0);
	dp[0] = nums[0];

	let max = dp[0];

	for (let i = 1; i < len; i++) {
		dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
		max = Math.max(max, dp[i]);
	}

	return max;
};