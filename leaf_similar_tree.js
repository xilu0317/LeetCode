// The core of this problem is in order traversal
// might be easier to do iteratively
const inOrderTraversal = (root) => {
    if (!root) return [];

    let res = [];
    let stack = [];
    let node = root;

    while (true) {
        if (node) {
            stack.push(node);
            node = node.left;
        } else {
            if (stack.length) {
                node = stack.pop();
                if (!node.left && !node.right) {
                    res.push(node.val);
                }
                node = node.right;
            } else {
                break;
            }
        }
    }

    return res;
};

const leafSimilar = (root1, root2) => {
    let list1 = inOrderTraversal(root1);
    let list2 = inOrderTraversal(root2);

    if (!list1 || !list2) return false;

    if (list1.length !== list2.length) return false;

    for (let i = 0; i < list1.length; i++) {
        if (list1[i] !== list2[i]) return false;
    }

    return true;
};