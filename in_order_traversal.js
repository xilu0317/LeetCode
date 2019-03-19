var inorderTraversal = function(root) {
  let res = []
  if (!root) return res;
  
  let stack = [];
  let node = root;
  let flag = true;
    
  while (true) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      if (stack.length) {
        node = stack.pop()
        res.push(node.val);
        node = node.right
      } else {
        break;
      }
    }
  }
  
  return res;
};
