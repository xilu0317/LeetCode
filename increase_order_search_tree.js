// when cur is at the root it doesnt' have next
//
//                  root
//               /        \
//              /          \
//          cur.left     cur.right
const increasingBST = (root) => {
    return increasingBSTRec(root, null);
};

// In terms of naming, it is better to use `cur` instead of `root` to reflect that it is a generic node
const increasingBSTRec = (cur, next) => {
    if (!cur) return next;

    const res = increasingBSTRec(cur.left, cur);
    cur.left = null;
    cur.right = increasingBSTRec(cur.right, next);

    return res;
};

//
//  `next` really is the next node to be processed
//
//                                    root
//                                 /        \
//                                .         /\
//                               .          --
//                              .
//                             /
//                            /
//                          next
//                       /       \
//                      /        /\
//                 -------       --
//                 | cur |
//                 -------
//               /        \
//              /          \
//          cur.left     cur.right
//          /      \     /       \
//         /\      /\   /\       /\
//         --      --   --       --
//
// Recall the very definition of the BST
// The subtree on the left is recursively smaller than the current node and subtree on the right is recursively larger
// Thus the value of `cur` is smaller than the value of `next` because cur is the root of the left subtree.