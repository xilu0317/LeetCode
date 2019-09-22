// https://leetcode.com/problems/remove-k-digits/

const removeKdigits = (num, k) => {
    let res = [];

    num += '';
    for (let c of num) {
        while (res.length && res[res.length - 1] > c && k) {
            // make sure digits in 'res' are in ascending order
            res.pop();
            k--;
        }

        // can't have leading '0's
        if (res.length || c !== '0') res.push(c);
    }

    // make sure remove k digits in total
    while (res.length && k--) res.pop();

    return res.length ? res.join('') : '0';
};
