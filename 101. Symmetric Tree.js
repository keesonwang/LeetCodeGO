/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    return ismirror(root, root);
};
let ismirror = (t1, t2)=>{
    if (!t1&&!t2) return true;
    if (!t1||!t2||t1.val!=t2.val) return false;
    return (t1.val == t2.val) &&
        ismirror(t1.left,t2.right)&&
        ismirror(t1.right,t2.left);
}
