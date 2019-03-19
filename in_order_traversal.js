const inorderTraversal = (root) => {
  if (!root) return [];
    
  let res = []
  let stack = [];
  let node = root; // node is basically cur, the reference will move

  while (true) {
    if (node) {
      stack.push(node); // This is like trail blazing, we `record` the path that we have taken already
      node = node.left; // keep going left as long as we could, note that the leftmost node would the absolute min when the entry point is the root
    } else {
      if (stack.length) {  // The stack.pop() part is the `backtrack` part
        node = stack.pop() // Cannot add the `let` keyword here, bc of the block scope. It will be problematic when going right in next 2 lines.
        res.push(node.val); // The `do` or `print` operation
        node = node.right // rturn from the left, now go right
      } else {
        break; // no `left` to go and stack is empty
      }
    }
  }

  return res;
};

// Think about my original algorithm where `in-order` didn't matter.