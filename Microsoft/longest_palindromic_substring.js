// The key is to construct the recurrence relationship.

// dp(i, j) represents whether s(i ... j) can form a palindromic substring

// dp(i, j) is true when s(i) equals to s(j) AND s(i + 1 ... j - 1)/enclosd string is palindromic.

// When we have found a palindrome, check if it's the longest.

// Time complexity O(n^2).

const longestPalindrome = (s) => {
    let n = s.length
    let res = ''
    let dp = Array(n).fill()
                     .map(() => Array(n).fill(false))

    // grow the palindrome from back to front, try to visualize the movement of indices
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            // j - i <= 2 means at most 3 elements
            if ((s[i] === s[j]) && (j - i <= 2 || dp[i + 1][j - 1]))
                dp[i][j] = true

            // 'j - i + 1' is the length of the current substring
            // Watch out for off-by-one error: ie 9 - 0 + 1 = 10 elements in total
            // substring of [i ... j]
            if (dp[i][j] && j - i + 1 > res.length)
                res = s.substring(i, j + 1)
        }
    }

    return res
}
