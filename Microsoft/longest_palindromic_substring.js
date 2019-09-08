// The key is to construct the recurrence relationship.

// dp(i, j) represents whether s(i ... j) can form a palindromic substring

// dp(i, j) is true when s(i) equals to s(j) AND s(i + 1 ... j - 1)/enclosd string is palindromic.

// When we have found a palindrome, check if it's the longest.

// Time complexity O(n^2).

const longestPalindrome = (s) => {
    const N = s.length;
    let res = '';

    const dp = Array(N).fill()
                       .map(() => Array(N).fill(false));

    // grow the palindrome from back to front
    for (let i = N - 1; i >= 0; i--) {
        for (let j = i; j < N; j++) {
            if ((s[i] === s[j]) && (j - i <= 2 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
            }

            // 'j - i + 1' is the length of the current substring
            // Watch out for off-by-one error: ie 9 - 0 + 1 = 10 elements in total
            if (dp[i][j] && j - i + 1 > res.length) {
                // substring bounded by i, j inclusive
                res = s.substring(i, j + 1);
            }
        }
    }

    return res;
};
