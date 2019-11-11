// Input: coins = [1, 2, 5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// bottom-up dp
// KEY: the gist is to solve a smaller problem then cache it for it to be used later
const coinChange = (coins, amount) => {
    let dp = Array(amount + 1).fill(Infinity)

    // init
    dp[0] = 0

    // loop through different 'amount'
    for (let i = 1; i <= amount; i++) {
        // loop through different coin denomination
        for (let j = 0; j < coins.length; j++) {
            // if the current denomination is smaller than or equal the current amount 'i'
            if (coins[j] <= i) {
                // make a locally optimized choice for change
                dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1)
            }
        }
    }

    return dp[amount] > amount ? -1 : dp[amount]
}
