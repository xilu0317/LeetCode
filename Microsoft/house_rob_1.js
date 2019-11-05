const rob = (nums) => {
    if (!nums || !nums.length) return 0

    let dp = Array(nums.length + 1).fill(0)
    dp[1] = nums[0]

    for (let i = 1; i < nums.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i])
    }

    return dp[nums.length]
}
