/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

var kthSmallest = function(root, k) {
    const res = {
    count:0,
    result:0
    }
    var traverse = (root)=>{
        if(root == null) return;
        traverse(root.left);
        res.count++;
        
        if(res.count == k){
            res.result = root.val;
        }
        traverse(root.right);
    }
    traverse(root);
    return res.result;
};
