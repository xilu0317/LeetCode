/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */



 var flatten = function(root) {
  if (!root) return;
  
  flatten(root.left);
  flatten(root.right);

  let tmp = root.right;
  root.right = root.left;
  
  let node = root.left;
  while (node && node.right) {
    node = node.right;
  }
  
  if (node) {
    node.right = tmp;
  }
};


// https://longwayjade.wordpress.com/2015/04/23/leetcode-recursion-flatten-binary-tree-to-linked-list/
// public class Solution {
//   // We have to define a separete field to record which is our last vist node
//   public TreeNode lastvisit = null; 
//   public void flatten(TreeNode root) {
//      if (root == null) return;
//        TreeNode savedRight = root.right;  // have to save right, since right is going to be changed.
//        if (lastvisit != null){
//            lastvisit.left = null;
//            lastvisit.right = root;
//        }
//        lastvisit = root;
//        flatten(root.left);
//        flatten(savedRight);
//   }
// }

// leet solution 2
// private TreeNode prev = null;

// public void flatten(TreeNode root) {
//     if (root == null)
//         return;
//     flatten(root.right);
//     flatten(root.left);
//     root.right = prev;
//     root.left = null;
//     prev = root;
// }
