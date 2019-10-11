const findLength = (A, B) => {
    if (!A || !B || !A.length || !B.length) return 0;

    let m = A.length, n = B.length;
    let max = 0;
    let dp = Array(m + 1).fill()
                         .map(() => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (A[i - 1] === B[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
                max = Math.max(max, dp[i][j]);
            }
        }
    }

    return max;
};
