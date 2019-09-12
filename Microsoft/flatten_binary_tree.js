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
function _flatten(node) {
    if (!node) return null;

    if (!node.left && !node.right) return node;

    if (!node.left) {
        return _flatten(node.right);
    }

    if (!node.right) {
        node.right = node.left;
        node.left = null;
        return _flatten(node.right);
    }

    let leftTreeTail = _flatten(node.left);
    let rightTreeTail = _flatten(node.right);

    let tmpRightHead = node.right;
    node.right = node.left;
    node.left = null;

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
const flatten = (node) => {
    if (!node) return;

    let temp = node.right;

    if (prev) {
        prev.left = null;
        prev.right = node;
    }

    prev = node;
    flatten(node.left);
    flatten(temp);
}
