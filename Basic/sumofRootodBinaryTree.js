// Definition of Binary Tree Node
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
// Complete the function below
let getSum = (root, str) => {
    if(root === null)
        return 0;
    if(root.left === null && root.right === null){
       return parseInt(str+root.val.toString(), 2); 
    }
    return getSum(root.left, str+root.val.toString()) + getSum(root.right, str+root.val.toString());
}
function sumRootToLeaf(root){
     return getSum(root, '');
}
