/**
 * @param {number} n
 * @return {string[]}
 */

const generateParenthesis = (n) => {
    let list = [];
    backtrack(list, '', 0, 0, n);

    return list;
};

// This is backtrack but however it is less akin to the dfs.
// It doesn't seem to have the notion of children.
const backtrack = (list, str, numOpen, numClose, max) => {
    // exit condition
    if (str.length === max * 2) {
        list.push(str);

        return;
    }

    // number of numOpen bracket less than the max number of brackets allowed
    if (numOpen < max) backtrack(list, str + '(', numOpen + 1, numClose, max);
    // if the number of close bracket is lower than the numOpen bracket recurse
    if (numClose < numOpen) backtrack(list, str + ')', numOpen, numClose + 1, max);
};
