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

// Generate a tree from an array
// Input array:
// [1, 3, 2, 5, 3, null, 9]
//         1
//      /     \
//     3       2
//    / \     / \
//   5   3   X   9
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

    if (left < arr.length && arr[left]) {
      let newLeft = new TreeNode(arr[left]);
      q.push(newLeft);
      node.left = newLeft;
    }

    if (right < arr.length && arr[right]) {
      let newRight =  new TreeNode(arr[right]);
      q.push(newRight);
      node.right = newRight;
    }
  }

  return root;
}

// Tree Traversal 
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

// DFS Backtrack iterative using stack, In-order traversal

// DFS recursive


// Main
// let root = generateBST(10);
let root = generateBinaryTreeFromArray([1,3,2,5,3,null,9]);
bfs(root);

