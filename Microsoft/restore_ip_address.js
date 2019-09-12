/**
 * @param {string} s
 * @return {string[]}
 */

// TODO: revisit
// https://leetcode.com/problems/restore-ip-addresses/solution/
const restoreIpAddresses = (s) => {
    let res = [];

    backtrack(s, res, 0, '', 0);

    return res;
};

const backtrack = (ip, res, index, restored, count) => {
    if (count > 4)
        return;

    if (count === 4 && index === ip.length)
        res.push(restored);

    for (let i = 1; i < 4; i++) {
        if (index + i > ip.length)
            break;

        let s = ip.substring(index, index + i);

        if (s.startsWith('0') && s.length > 1 || (i === 3 && parseInt(s) >= 256))
            continue;

        backtrack(ip, res, index + i, restored + s + (count === 3 ? '' : '.'), count + 1);
    }
};
