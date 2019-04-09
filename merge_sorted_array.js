/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = (root) => {
  if (!root) return false;

  let node = root;
  let stack = [];
  let res = [];
  let checkSymmetry = false;

  while (true) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length) {
        node = stack.pop();
        
        if (node === root) checkSymmetry = true;
        if (node !== root && checkSymmetry) {
          if (res.pop() !== node.val) return false;
        } else {
          res.push(node.val);
        }
        
        node = node.right;
      } else {
        break;
      }
    }
  }

  return true;
};