const inorderTraversal = (root) => {
    if (!root) return [];

    let res = [], stack = [];
    let node = root; // node is basically cur, the reference will move

    while (true) {
        // If current node exists
        if (node) {
            // This is like trail blazing, we 'record' the path that we have taken already
            stack.push(node);
            // keep going left as long as we could, note that the leftmost node would the absolute
            // min when the entry point is the root
            node = node.left;
        } else {
            // The stack.pop() part is the 'backtrack' part
            if (stack.length) {
                // do not use let here
                node = stack.pop();

                // The 'do' part
                res.push(node.val);

                // We have already been to the left node, now go right
                node = node.right;
            } else {
                // Stack is empty and exit out
                break;
            }
        }
    }

    return res;
};

// Think about my original algorithm where 'in-order' didn't matter.

// using do-while loop
const inorderTraversal = (root) => {
    if (!root) return [];

    let curNode = root;
    let stack = [], res = [];

    do {
        if (curNode) {
            stack.push(curNode);
            curNode = curNode.left;
        } else {
            curNode = stack.pop();

            // visit
            if (curNode) {
                res.push(curNode.val);
            }

            curNode = curNode.right;
        }
    } while (curNode || stack.length);

    return res;
};
