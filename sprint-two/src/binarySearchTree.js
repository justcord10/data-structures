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
  if (this.value < value) {
    // if this.right is empty
    if (this.right === undefined) {
      // insert value
      this.right = new BinarySearchTree(value);
    }
    // go down one node in tree and repeat comparison (recursion)
    this.right.insert(value);
  }


  // else if smaller
  if (this.value > value) {
    // if this.left is empty
    if (this.left === undefined) {
      // insert value
      this.left = new BinarySearchTree(value);
    }
    // go down one node in tree and repeat comparison
    this.left.insert(value);
  }
};

BinarySearchTree.prototype.contains = function(value) {
  // compare value to current nodes value
  // if same
  if (this.value === value) {
    // return true
    return true;
  }
  // if bigger // maybe create a method to DRY
  if (this.value < value) {
    // if this.right is empty
    if (this.right === undefined) {
      // return false
      return false;
    }
    // go down one node in tree and repeat comparison (recursion)
    return this.right.contains(value);
  }
  // else if smaller
  if (this.value > value) {
    // if this.left is empty
    if (this.left === undefined) {
      // return false
      return false;
    }
    // go down one node in tree and repeat comparison
    return this.left.contains(value);
  }
};

BinarySearchTree.prototype.depthFirstLog = function(callBack) {
  // pass root value into callback function
  callBack(this.value);
  // check if left is defined
  if (this.left !== undefined) {
    // recusevily use depthfirstlog on this.left with callback as argument
    this.left.depthFirstLog(callBack);
  }
  // check if right is defined
  if (this.right !== undefined) {
    // recusevily use depthfirstlog on this.right with callback as argument
    this.right.depthFirstLog(callBack);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
