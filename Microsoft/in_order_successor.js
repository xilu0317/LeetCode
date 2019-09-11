// Central idea is to inspect the current node and determine where to go. If the cur val is
// smaller than or equal the target value we should go to the right side

// When puzzled always draw a diagram to assist the understanding
//                 _____
//                 |CUR|
//                 -----
//                /
//               /
//              P
//            /   \
//           /     \
//       Subtree   Subtree <=== The successor must be here
//           *Case I
//
//                 _____
//                 |CUR|
//                 -----
//                /
//               /
//              P
//            /   \
//           /     \
//       Subtree   NULL
//          *Case II
//
//
//                Larger (Because of Case III, P can't really be here, should have already returned at this point)
//                 /
//                /
//            _____
//            |CUR|
//            -----
//            /   \
//           /     \
//       Smaller   Larger (P)  <=== Since P in this subtree, direct the code to go search the right subtree
//           *Case III
//
// Using 'cur' is preferred because it reflects the dynamic nature of the 'root'
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
const inorderSuccessor = (cur, p) => {
    // Exit conition for recursion
    if (!cur) return null;

    if (cur.val > p.val) {
        // If the current value is greater than the p value, go search on the left subtree if nothing exisit the current value is the succeor
        return inorderSuccessor(cur.left, p) || cur;
        //                 *Case I           *Case II
    } else {
        // If the current value is smaller, go search on the right subtree
        return inorderSuccessor(cur.right, p);
        //                 *Case III
    }
};

// Nothing speical to the predecessor code. All symmetrical.
const predecessor = (cur, p) => {
    if (!cur) return null;

    if (cur.val >= p.val) {
        return predecessor(cur.left, p);
    } else {
        return predecessor(cur.right, p) || cur;
    }
};

// TODO: Need to understand both iterative and recursive solution

