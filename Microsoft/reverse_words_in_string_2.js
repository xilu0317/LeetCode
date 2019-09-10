
// https://leetcode.com/problems/reverse-words-in-a-string-ii/

// Input: ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"]
// Output: ["b", "l", "u", "e", " ", "i", "s", " ", "s", "k", "y", " ", "t", "h", "e"]

// A word is defined as a sequence of non - space characters.
// The input string does not contain leading or trailing spaces.
// The words are always separated by a single space.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

const reverseWords = (s) => {
    // reverse the whole sentence
    reverse(s, 0, s.length - 1);

    // reverse each word
    let start = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            // if the current is space then reverse the previous one
            reverse(s, start, i - 1);
            start = i + 1;
        }
    }

    // reverse the last word, if there is only one word this will solve the corner case
    reverse(s, start, s.length - 1);
};

const reverse = (s, start, end) => {
    while (start < end) {
        [s[start], s[end]] = [s[end], s[start]];
        start++;
        end--;
    }
};
