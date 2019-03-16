// stack approach
const binaryTreePaths = (root) => {
  if (!root) return [];

  let stack = [[root, '']];
  let res = [];

  while (stack.length) {
    let [node, total] = stack.pop();

    if (!node.left && !node.right) {
      res.push(total + node.val);
    }

    if (node.right) {
      stack.push([node.right, total + node.val + '->']);
    }

    if (node.left) {
      stack.push([node.left, total + node.val + '->']);
    }
  }

  return res;
}