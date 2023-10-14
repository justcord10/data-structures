// using pseudoclassical class style
  // add properties
    // .left: BST where all values are lower than current value
    // .right: BST all values are higher than current value
  // add methods
    // .insert: navigate down branches of tree starting at root/this until no more children
    // .contains: navigate down branches until it matches target or no more children
    // .depthFirstLog: accepts a callback and execures ir on every value containe in the tree

var BinarySearchTree = function(value) {
  this.left = undefined;
  this.right = undefined;
  this.value = value;
  // add a property that references/points to the root node
    // need to make sure insert method will override this prop with ref to root node
};

BinarySearchTree.prototype.insert = function(value) {
  // compare value to current nodes value
  // if bigger // maybe create a method to DRY
    // if this.right is empty
      // insert value
    // go down one node in tree and repeat comparison (recursion)
  // else if smaller
    // if this.left is empty
      // insert value
    // go down one node in tree and repeat comparison
};

BinarySearchTree.prototype.contains = function(value) {

};

BinarySearchTree.prototype.depthFirstLog = function(callBack) {

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
