// https://leetcode.com/problems/remove-k-digits/

// THINK why don't we just pick the first largest k values
const removeKdigits = (num, k) => {
    let res = [];

    num += '';
    for (let c of num) {
        // KEY: make sure digits in 'res' are in ascending order
        while (res.length && res[res.length - 1] > c && k) {
            res.pop();
            k--;
        }

        // can't have leading '0's => De Morgan's law if hard to read
        if (res.length || c !== '0') res.push(c);
    }

    // need to remove k digits in total. pay attention to the scope of 'k'
    while (res.length && k--) res.pop();

    return res.length ? res.join('') : '0';
};
