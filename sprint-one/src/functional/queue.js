var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var frontKey = 0; //what is at frontKey is the oldest added item (i.e. is at the front of the queue)
  var backKey = -1; //what is at the backKey is the most recently added item,(i.e. is at the back of the queue) works like the key for stack

  // Implement the methods below

  //adds the item to the back of the 'line' (increments backKey and stores value at key backKey)
  someInstance.enqueue = function(value) {
    //increment backKey
    backKey ++;
    //store value in the queue
    storage[backKey] = value;
  };
  //removes and returns the item at the 'front' of the line  ( if no items in the queue then return stores the item at the frontKey in a temp var and then deletes that prop then increments frontKey and returns temp)
  someInstance.dequeue = function() {
    //if no items then return
    if (backKey < frontKey) {
      return;
    }
    //declare temp var and store the property at the frontKey in temp
    var temp = storage[frontKey];
    //delete that property
    delete storage[frontKey];
    //increment frontKey
    frontKey ++;
    //return temp
    return temp;
  };
  //doesnt change the object but returns the number of items in the queue by returning the difference between front and back key
  someInstance.size = function() {
    //return the difference between frontKey and backKey (will need fine tuned)
    return backKey - frontKey + 1;
  };

  return someInstance;
};
