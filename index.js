const BinarySearchTree = require('./bst')

let newTree = new BinarySearchTree();
newTree.insert(3, 3)
newTree.insert(1, 1)
newTree.insert(4, 4)
newTree.insert(6, 6)
newTree.insert(9, 9)
newTree.insert(2, 2)
newTree.insert(5, 5)
newTree.insert(7, 7)


console.log(newTree)



function tree(t){
    if(!t){
        return 0;
    }
    return tree(t.left) + t.value + tree(t.right)
}

console.log(tree(newTree))