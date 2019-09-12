const stuff = require('../basics/bst.js');

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

// my own [BAD SOLUTION]
function _flatten(cur) {
    if (!cur) return null;

    if (!cur.left && !cur.right) return cur;

    if (!cur.left) {
        return _flatten(cur.right);
    }

    if (!cur.right) {
        cur.right = cur.left;
        cur.left = null;
        return _flatten(cur.right);
    }

    let leftTreeTail = _flatten(cur.left);
    let rightTreeTail = _flatten(cur.right);

    let tmpRightHead = cur.right;
    cur.right = cur.left;
    cur.left = null;

    leftTreeTail.left = null;
    leftTreeTail.right = tmpRightHead;

    return rightTreeTail;
}

const flatten_xi = (root) => {
    _flatten(root);
};

let root = stuff([1, 2]);
flatten_xi(root);

// Pre-Order TODO: revisit
// https://longwayjade.wordpress.com/2015/04/23/leetcode-recursion-flatten-binary-tree-to-linked-list/
let prev = null;
const flatten = (cur) => {
    if (!cur) return;

    let temp = cur.right;

    if (prev) {
        prev.left = null;
        prev.right = cur;
    }

    prev = cur;
    flatten(cur.left);
    flatten(temp);
};
