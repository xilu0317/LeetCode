// Recursive
const isUnivalTree = (root) => {
    if (!root) return false;

    if (!root.left && !root.right) return true;

    if (!root.left) return isUnivalTree(root.right) && root.val === root.right.val;

    if (!root.right) return isUnivalTree(root.left) && root.val === root.left.val;

    return isUnivalTree(root.right) && isUnivalTree(root.left) && root.val === root.left.val && root.val === root.right.val;
};

// Iterative
const isUnivalTree = (root) => {
  if (!root) return false;

  let stack = [];
  let node = root;

  while (true) {
      if (node) {
          stack.push(node);
          node = node.left;
      } else {
          if (stack.length) {
              node = stack.pop();
              if (node.val != root.val) return false;
              node = node.right;
          } else {
              break;
          }
      }
  }
  return true;
};