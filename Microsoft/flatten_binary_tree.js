// This is the most straightforward solution
// Other solutions are too hard to understand
const flatten = (root) => {
    if (!root) return;

    let oldLeft = root.left;
    let oldRight = root.right;

    // as per spec set left to zero
    root.left = null;

    flatten(oldLeft);
    flatten(oldRight);

    root.right = oldLeft;

    let cur = root;
    while (cur.right)
        cur = cur.right;
    cur.right = oldRight;
};
