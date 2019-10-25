/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!q&&!p) return true;
    if (!q||!p||p.val!==q.val) return false;
    return isSameTree(p.left,q.left)&&isSameTree(p.right, q.right);
};
