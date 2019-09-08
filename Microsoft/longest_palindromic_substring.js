// This is a very classical dp problem.
// The key to finding the solution to this problem is to construct the recurrence relationship.

// dp(i, j) represents whether s(i ... j) can form a palindromic substring

// dp(i, j) is true when s(i) equals to s(j) and s(i + 1 ...j - 1) is a palindromic substring.

// When we found a palindrome, check if it's the longest one. Time complexity O(n^2).

const longestPalindrome = (s) => {
    const N = s.length;
    let res = '';

    const dp = Array(N).fill()
                       .map(() => Array(N).fill(false));

    for (let i = N - 1; i >= 0; i--) {
        for (let j = i; j < N; j++) {
            if ((s[i] === s[j]) && (j - i < 3 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }
            
            // If it is palindromic and the length is greater than the previous length
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1);
            }
        }
    }

    return res;
};
