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
    let pre = null;
    var LL = (root) =>{
        if(!root)return;
        //倒序遍历
        LL(root.right);
        LL(root.left);
        root.right = pre;
        root.left = null;
        //让每个节点变成上个节点的右
        pre = root;
    }
    return LL(root);
};
