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
var preorderTraversal = function(root) {
    let result = [];
    var tr = (root)=>{
        if(!root)return;
        result.push(root.val);
        tr(root.left);
        tr(root.right);
    }
    tr(root);
    return result
};

//w/o rec
var preorderTraversal = function(root) {
  if (!root) return [];
  var result = [];
  var stack = [root];
  
  while(stack.length) {
    var node = stack.pop();
    result.push(node.val);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }
  return result;
};
