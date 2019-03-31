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

// My incorrect recursive solution
var flatten = function(root) {
if (!root) return;

flatten(root.left);
flatten(root.right);

let tmp = root.right;
root.right = root.left;

let node = root.left;
while (node && node.right) {
  node = node.right;
}

if (node) {
  node.right = tmp;
}
};

// Pre-Order
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

// Post-Order
let prev = null;
const flatten_postOrder = (node) => {
  if (!node) return;

  flatten(node.right);
  flatten(node.left);

  node.right = prev;
  node.left = null;
  prev = node;
}
