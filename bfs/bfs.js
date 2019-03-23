class Node {
  constructor(val, children) {
    this.val = val;
    this.children = children;
  }
}

const bfs = (root) => {
  if (!root) return;

  let q = [root];
  while (q.length) {
      let len = q.length;
      for (let i = 0; i < len; ++i) {
          let node = q.shift(); // dequeue
          for (let child of node.children) {
            q.push(child);
          }
      }
  }
}

// Generate binary search tree from a sorted array
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const _generateBinaryTreeRec = (arr, low, high) => {
  if (!arr) return null;
  
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
const generateBinaryTree = (num) => {
  let arr = Array(num).fill().map((v,i)=>i+1);
  return _generateBSTRec(arr, 0, arr.length);  
}

