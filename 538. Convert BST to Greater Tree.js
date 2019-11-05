/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

var convertBST = function(root) {
    const res = {
        sum : 0
    }
    var BST = (root) =>{
    if (root != null) {
    BST(root.right);
    res.sum = res.sum + root.val;
    root.val = res.sum;
    BST(root.left);
    
    }
    return root;
}

    
    return BST(root);
    
};
