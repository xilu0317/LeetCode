// https://leetcode.com/problems/remove-k-digits/

// The key to solving this problem is the observation to how to make the number small
// THINK: why don't we just pick the first largest k values?
const removeKdigits = (num, k) => {
    let res = [];

    num += '';
    for (let c of num) {
        // KEY: make sure digits in 'res' are in ascending order
        while (res.length && res[res.length - 1] > c && k) {
            res.pop();
            k--;
        }

        // can't have leading '0's
        // De Morgan =>IF !res.length && c === '0' THEN don't push
        if (res.length || c !== '0') res.push(c);
    }

    // need to remove k digits in total.
    // THINK: why is k valid here?
    while (res.length && k--) res.pop();

    return res.length ? res.join('') : '0';
};
