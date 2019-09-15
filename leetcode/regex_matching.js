const isMatch = (s, p) => {
    if (s === null || p === null) return false;

    let sLen = s.length, pLen = p.length;
    let dp = Array(sLen + 1)
        .fill()
        .map(() => Array(pLen + 1).fill(false));

    // initialization
    dp[0][0] = true;
    for (let i = 0; i < pLen; i++) {
        if (p[i] === '*' && dp[0][i - 1])
            dp[0][i + 1] = true;
    }

    for (let i = 0; i < sLen; i++) {
        for (let j = 0; j < pLen; j++) {
            // if the pattern is a '.', inherit the previous truth value
            if (p[j] === '.')
                dp[i + 1][j + 1] = dp[i][j];

            // if the current char is an exact equal, inherit the previous truth value
            if (p[j] === s[i])
                dp[i + 1][j + 1] = dp[i][j];

            //
            if (p[j] === '*') {
                if (p[j - 1] !== s[i] && p[j - 1] !== '.')
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                else
                    dp[i + 1][j + 1] = (dp[i + 1][j] || dp[i][j + 1] || dp[i + 1][j - 1]);
            }
        }
    }

    return dp[sLen][pLen];
};
