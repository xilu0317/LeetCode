// when cur is at the root it doesnt' have parent
//
//                  root
//               /        \
//              /          \
//          cur.left     cur.right
const increasingBST = (root) => {
    return increasingBSTRec(root, null);
};

// In terms of naming, it is better to use `cur` instead of `root` to reflect that it is a generic node
const increasingBSTRec = (cur, parent) => {
    // exit condition for recursion
    // If `cur` is null it means `cur` is a leaf. The `parent` would be whatever parent node of that leaf
    // `parent can also be named as `next`.
    if (!cur) return parent;

    const res = increasingBSTRec(cur.left, cur);
    cur.left = null;
    cur.right = increasingBSTRec(cur.right, parent);

    return res;
};

//
//  `parent` really is the parent node to be processed
//
//                                    root
//                                 /        \
//                                .         /\
//                               .          --
//                              .
//                             /
//                            /
//                          parent
//                       /       \
//                      /        /\
//                 -------       --
//                 | cur |
//                 -------
//               /        \
//              /          \
//          cur.left     cur.right
//          /      \     /       \
//        null     /\   /\       /\
//                 --   --       --
//
// Recall the very definition of the BST
// The subtree on the left is recursively smaller than the current node and subtree on the right is recursively larger
// Thus the value of `cur` is smaller than the value of `parent` because cur is the root of the left subtree.