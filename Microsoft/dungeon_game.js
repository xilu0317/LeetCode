// An additional underlying map/`dp` is always needed for this type of problems for making updates
const calculateMinimumHP = (dungeon) => {
    if (!dungeon) return -1;

    const m = dungeon.length;
    const n = dungeon[0].length;

    // build an underlying matrix for DP
    // Start by assuming you need infinite health to go around
    const dp = Array(m + 1).fill()
                           .map(() => Array(n + 1).fill(Infinity));

    // When you have reached the destination, you need to be alive meaning at least 1 health
    dp[m][n - 1] = 1;
    dp[m - 1][n] = 1;

    // Start from the last grid and walk back to [0][0]
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            // What you need is minimal path with what you need to pay for for the current grid
            let need = Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j];
            // If need is negative, that means you gain hp but still the need should be 1
            dp[i][j] = need <= 0 ? 1 : need;
        }
    }

    return dp[0][0];
};