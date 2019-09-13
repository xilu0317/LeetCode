class Solution {
    // Shared global var across all methods
    List<Integer> res = new ArrayList<Integer>(100);

    List<Integer> boundaryOfBinaryTree(TreeNode root) {
        if (root == null)
            return res;

        res.add(root.val);

        addLeftBoundary(root.left);
        addLeaves(root.left);
        addLeaves(root.right);
        addRightBoundary(root.right);

        return res;
    }

    void addLeftBoundary(TreeNode cur) {
        if (cur == null || (cur.left == null && cur.right == null))
            return;

        res.add(cur.val);

        if (cur.left == null)
            addLeftBoundary(cur.right);
        else
            addLeftBoundary(cur.left);
    }

    void addRightBoundary(TreeNode cur) {
        if (cur == null || (cur.left == null && cur.right == null))
            return;

        if (cur.right == null)
            addRightBoundary(cur.left);
        else
            addRightBoundary(cur.right);

        res.add(cur.val); // add after child visit(reverse)
    }

    void addLeaves(TreeNode cur) {
        if (cur == null)
            return;

        if (cur.left == null && cur.right == null) {
            res.add(cur.val);
            return;
        }

        addLeaves(cur.left);
        addLeaves(cur.right);
    }
}
