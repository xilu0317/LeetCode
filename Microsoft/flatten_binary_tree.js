// Best recursive solution
const flatten = (root) => {
    if (!root) return;

    // record left and right
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
