class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

const _generateBSTRec = (arr, low, high) => {
    if (!arr) return null;
    if (low > high) return null;

    let mid = parseInt((low + high) / 2);
    let root = new TreeNode(arr[mid]);

    root.left = _generateBSTRec(arr, low, mid - 1);
    root.right = _generateBSTRec(arr, mid + 1, high);

    return root;
};

/**
 * @param {number} num
 * @return {TreeNode} root
 */
// BST from 1 to 15
//
//               8 (root)
//             /   \
//            /     \
//           /       \
//          /         \
//         /           \
//        4            12
//      /   \        /    \
//     2     6      10    14
//    / \   / \    / \   /  \
//   1   3 5   7  9  11 13  15
//
const generateBST = (num) => {
    let arr = Array(num).fill().map((v, i) => i + 1);
    return _generateBSTRec(arr, 0, arr.length - 1);
};

// Generate a tree from an array
// Input array:
// [1, 3, 2, 5, 3, null, 9]
//
//         1
//       /   \
//      /     \
//     3       2
//    / \     / \
//   5   3  nul  9
//
/**
 * @param {number[]} arr
 * @return {TreeNode} root
 */
const generateBinaryTreeFromArray = (arr) => {
    if (!arr) return null;

    let root = new TreeNode(arr[0]);
    let q = [root];

    for (let i = 0; i < arr.length; i++) {
        let left = 2 * i + 1;
        let right = 2 * i + 2;
        let node = q.shift();

        if (left < arr.length && arr[left] !== null) {
            let newLeft = new TreeNode(arr[left]);
            q.push(newLeft);
            node.left = newLeft;
        }

        if (right < arr.length && arr[right] !== null) {
            let newRight = new TreeNode(arr[right]);
            q.push(newRight);
            node.right = newRight;
        }
    }

    return root;
};

// Tree Traversal
// BFS iterative
const bfs = (root) => {
    if (!root) return;

    let q = [root];
    while (q.length) {
        let len = q.length;
        for (let i = 0; i < len; i++) {
            let node = q.shift();
            console.log('vist -> ' + node.val);
            if (node.left) {
                q.push(node.left);
            }
            if (node.right) {
                q.push(node.right);
            }
        }
        console.log("-----level-------");
    }
};

// DFS [Backtrack] iterative using stack, In-order traversal
// Here is how you remember it.
// You are entering in the woods. To make sure that you don't lost in the woods you keep a notebook with you to keep track.
// The notebook is called `stack`.  When you enter a new area/node, you mark it down on your note book before you go further.
// You keep going to the left until there is no way left to go. Now you pull out your notebook to `backtrack` to the previous
// location, once you have arrived at the previous position from where you came from, you mark it off your notebook/stack.
// At the backtracked position, you know the way to the left is a deadend, you then wisely decided to move to the right this time.
// You tirelessly repeat the above procedure, once you have marked off all positions in your notebook you have finally arived in
// destination! Surprise surpise you are still stuck in the fking woods LOL!
const dfs = (root) => {
    if (!root) return;

    let node = root;
    let stack = [];

    while (true) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length) {
                node = stack.pop(); // backtrack to the last position
                console.log('visit -> ' + node.val); // visit
                node = node.right;
            } else {
                break;
            }
        }
    }
};

// PreOrder Recursive
const preOrderTraversal = (root) => {
    if (!root) return;

    console.log('visit -> ' + root.val);
    preOrderTraversal(root.left);
    preOrderTraversal(root.right);
};

// InOrder Recursive
const InOrderTraversal = (root) => {
    if (!root) return;

    InOrderTraversal(root.left);
    console.log('visit -> ' + root.val);
    InOrderTraversal(root.right);
};

// PostOrder Recursive
const postOrderTraversal = (root) => {
    if (!root) return;

    postOrderTraversal(root.left);
    postOrderTraversal(root.right);
    console.log('visit -> ' + root.val);
};

// use this line to export the function you want in Nodejs, note browser Javascript might be different
// const stuff = require('./basics/bst.js');
// `stuff` will then be an alias to `generateBinaryTreeFromArray` in the calling file

module.exports = generateBinaryTreeFromArray;
//module.exports = generateBST;

// Main
// Binary tree initialization
//let root = generateBST(15);
//let root = generateBinaryTreeFromArray([1,2,5,3,4,null,6]);

// Tree traversal
// bfs(root);
// dfs(root);
// preOrderTraversal(root);
// InOrderTraversal(root);
// postOrderTraversal(root);
