const maxSubArray = (nums) => {
    if (!nums || !nums.length) return -1;

    const LEN = nums.length;

    const dp = Array(LEN).fill(0);
    dp[0] = nums[0];

    let max = dp[0];

    // note it starts at 1
    for (let i = 1; i < LEN; i++) {
        dp[i] = nums[i] + (dp[i - 1] > 0 ? dp[i - 1] : 0);
        // update max using current dp value
        max = Math.max(max, dp[i]);
    }

    return max;
};
