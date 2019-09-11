/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// TODO: revisit
const minDistance = (word1, word2) => {
    let m = word1.length, n = word2.length;
    let dp = Array(m + 1).fill()
                         .map(() => Array(n + 1).fill(0));
    
    // setup boundary conditions
    for (let i = 1; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 1; j <= n; j++) {
        dp[0][j] = j;
    }

    // DP
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1])
                dp[i][j] = dp[i - 1][j - 1];
            else
                dp[i][j] = Math.min(...[dp[i - 1][j - 1], dp[i][j - 1], dp[i - 1][j]]) + 1;
        }
    }

    return dp[m][n];
};
