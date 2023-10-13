var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //create a new node with our node constructor and store in newNode variable
    var newNode = Node(value);
    //check if list empty
    if (list.tail === null) {
      //assign head and tail to newNode
      list.head = newNode;
      list.tail = newNode;
    } else {
      //assign our tail's next property to the newNode
      list.tail.next = newNode;
      //assign tail to newNode
      list.tail = newNode;
    }

  };

  list.removeHead = function() {
    //check if head is null
    if (list.head === null) {
      return;
    }
    //store headValue in temp
    var temp = list.head.value;
    //check if tail === head (only one item in list)
    if (list.tail === list.head) {
      list.tail = null;
    }
    //point head at the next node in the list
    list.head = list.head.next;
    //delete the no longer used node??
    //return temp
    return temp;
  };

  list.contains = function(target) {
    //declare currentNode var and point at first Node in the list
    var currentNode = list.head;
    //iterate through the linked list (while currentNode is not null)
    while (currentNode !== null) {
      //if current nodes value is the same as our target //return true
      if (currentNode.value === target) {
        return true;
      }
      //otherwise assign currnetNode to the next node in the list
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
