/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
// cur is the entry point, normally root.
const inorderSuccessor = (cur, p) => {
    if (!cur) return null;

    if (cur.val <= p.val) {
        return inorderSuccessor(cur.right, p);
    } else {
        return inorderSuccessor(cur.left, p) || cur;
    }
};

// Nothing speical to it. All symmetrical.
const predecessor = (cur, p) => {
    if (!cur) return null;

    if (cur.val >= p.val) {
        return predecessor(cur.left, p);
    } else {
        return predecessor(cur.right, p) || cur;
    }
};

// TODO: please add the iterative solution as well
