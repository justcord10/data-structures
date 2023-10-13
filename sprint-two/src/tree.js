var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];

  newTree.addChild = treeMethods.addChild;
  newTree.contains = treeMethods.contains;
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // create a new tree with the value as the argument
  var currentTree = Tree(value);
  // push that new tree onto the this keyword children array
  this.children.push(currentTree);
};

treeMethods.contains = function(target) {
  // declare 2 boolean variables (for readability) isInChildNode, isInCurrentNode
  var isInChildNode = false;
  // var isInCurrentNode = false; // might not need

  // start at this keyword tree
  // check if current node has no children
  if (this.children.length === 0) {
    // check this.value is equal to target
    if (this.value === target) {
      return true;
    }
    return false;
  }
  // check if this.value is equal to target
  if (this.value === target) {
    // isInCurrentNode boolean assign true
    return true; // check this later
  }
  // iterate through our child array
  for (let i = 0; i < this.children.length; i++) {
    isInChildNode = this.children[i].contains(target); //recursion
    // check if isInChildNode is true
    if (isInChildNode) {
      // return true if it is
      return true;
    }
  }
  // _.each(this.children, function(childNode) {
  //   isInChildNode = childNode.contains(target); //recursion
  //   // check if isInChildNode is true
  //   if (isInChildNode) {
  //     // return true if it is
  //     return true;
  //   }
  // });
  // if its in the childnode // or in the current node
  if (isInChildNode) {
    return true;
  }
  // if its not in any of the childnodes and not in current node
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 * addChild method (O)1 constant
 * contains method (O)n linear for loop with recursion inside still only
 */
