
class Solution {
    // Shared global var across all methods
    List<Integer> res = new ArrayList<Integer>(100);

    public List<Integer> boundaryOfBinaryTree(TreeNode root) {
        if (root == null)
            return res;

        res.add(root.val);

        leftBoundary(root.left);
        addLeaves(root.left);
        addLeaves(root.right);
        rightBoundary(root.right);

        return res;
    }

    public void leftBoundary(TreeNode cur) {
        if (cur == null || (cur.left == null && cur.right == null))
            return;

        res.add(cur.val);

        if (cur.left == null)
            leftBoundary(cur.right);
        else
            leftBoundary(cur.left);
    }

    public void rightBoundary(TreeNode cur) {
        if (cur == null || (cur.right == null && cur.left == null))
            return;

        if (cur.right == null)
            rightBoundary(cur.left);
        else
            rightBoundary(cur.right);

        res.add(cur.val); // add after child visit(reverse)
    }

    public void addLeaves(TreeNode cur) {
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
