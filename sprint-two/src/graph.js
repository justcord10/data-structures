

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  // this.nodeskey = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  // instantiate newNode with our value
  var newNode = new GraphNode(value);
  // push onto our graph's node property
  this.nodes.push(newNode);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  // iterate through graph's node prop
  for (let i = 0; i < this.nodes.length; i++) {
    // if node.value === value
    if (this.nodes[i].value === value) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(value) {
  // call contains method with node's value
  var isContained = this.contains(value);
  // if value is not found
  if (!isContained) {
    return;
  }
  // call findNode method
  // create temp variable to hold our current node's reference array
  var node = this.findNode(value);
  var index = this.nodes.indexOf(obj => obj.value === value); //the index we want to remove from our graph.nodes
  var refArray = node.vertices;
  // delete node
  this.nodes.splice(index, 1);
  // iterate through refArray
  for (let i = 0; i < refArray.length; i++) {
    // delete node's edge references from other nodes
    var refIndex = refArray[i].vertices.indexOf(obj => obj.value === value);
    refArray[i].vertices.splice(refIndex, 1);
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromValue, toValue) {
  // make sure both node's values are actually in our graph using contains
  var fromIsContained = this.contains(fromValue);
  var toIsContained = this.contains(toValue);
  if (!fromIsContained || !toIsContained) {
    return false;
  }
  // store references to both nodes using input parameters
  var fromNode = this.findNode(fromValue);
  // var toNode = this.findNode(toValue);

  // check to see if fromNode has a edge reference to toNode
  for (let i = 0; i < fromNode.vertices.length; i++) {
    if (fromNode.vertices[i].value === toValue) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromValue, toValue) {
  // store references to both nodes using input parameters
  var fromNode = this.findNode(fromValue);
  var toNode = this.findNode(toValue);
  // create edge reference in fromNode to toNode
  fromNode.vertices.push(toNode);
  // create edge reference in toNode to fromNode
  toNode.vertices.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromValue, toValue) {
  // store references to both nodes using input parameters
  var fromNode = this.findNode(fromValue);
  var toNode = this.findNode(toValue);
  // delete edge reference in fromNode to toNode
  var fromIndex = fromNode.vertices.indexOf(obj => obj.value === toValue); //the index we want to remove from our fromNode.vertices
  fromNode.vertices.splice(fromIndex, 1);
  // delete edge reference in toNode to fromNode
  var toIndex = toNode.vertices.indexOf(obj => obj.value === fromValue); //the index we want to remove from our fromNode.vertices
  toNode.vertices.splice(toIndex, 1);

};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  // iterate through graph nodes array
  for (let i = 0; i < this.nodes.length; i++) {
    // pass current node's value in cb
    cb(this.nodes[i].value);
  }
};

// make a new method to return a node based on input value
// need to make sure node exists before calling this findNode method
Graph.prototype.findNode = function(target) {
  // given target, iterate through this.nodes until we find target
  for (let i = 0; i < this.nodes.length; i++) {
    if (this.nodes[i].value === target) {
      // return node
      return this.nodes[i];
    }
  }
};

// node constructor here
var GraphNode = function(value) {
  this.value = value;
  this.vertices = [];
};
// example instantiation: var newNode = new Node(5);

/*
 * Complexity: What is the time complexity of the above functions?
 */


