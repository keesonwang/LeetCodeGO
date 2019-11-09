/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    const result = [];
    var tr = (root) =>{
        if(!root)return;
        tr(root.left);
        result.push(root.val);
        tr(root.right);
    }
    tr(root);
    return result;
};
