var maxDepth = function(root) {
    if (!root) return 0;
    let res = 0;
    let q = [root];

    while(q.length) {
      let qLen = q.length;
      for (let i = 0; i < qLen; ++i) {

      }
    
    }

};



var test = (root) => {
  if (!root) return [];

  let stack = [];
  let res = [root, ''];

  while (stack.length) {
    let [node, total] = stack.pop();

    if (!node.left && !node.right) {
      res.push(total + node.val);
    }

    if (!node.right) {
      stack.push([node.right, total + node.val + '->']);
    }

    if (!node.left) {
      stack.push([node.left, total + node.val + '->']);
    }
  }

  return res;
}