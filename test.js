class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const _generateBSTRec = (arr, low, high) => {
  if (!arr) return null;
  if (low > high) return null;

  let mid = parseInt((low + high)/2);
  let root = new TreeNode(arr[mid]);

  root.left = _generateBSTRec(arr, low, mid - 1);
  root.right = _generateBSTRec(arr, mid + 1, high);

  return root;
}

/**
 * @param {number} num
 * @return {TreeNode} root
 */
const generateBST = (num) => {
  let arr = Array(num).fill().map((v,i) => i+1);
  return _generateBSTRec(arr, 0, arr.length - 1);
}

// BFS iterative
const bfs = (root) => {
  if (!root) return;

  let q = [root];
  while(q.length) {
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
}

// DFS Backtrack iterative using stack

// DFS recursive

// Generate a tree from an array
// Input array:
// [1, 3, 2, 5, 3, null, 9]
//         1
//      /     \
//     3       2
//    / \     / \
//   5   3   X   9



// main code
let root = generateBST(10);
bfs(root);



