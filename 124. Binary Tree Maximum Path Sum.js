/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = - Number.MAX_VALUE;
    var maxPath = (root) =>{
        if(!root)return 0;
        let left = Math.max(maxPath(root.left),0);
        let right = Math.max(maxPath(root.right),0);
        max = Math.max(max, root.val + left + right);
        return Math.max(left,right) + root.val;
    }
    maxPath(root);
    return max;
};
