var Queue = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.frontKey = 0;
  someInstance.backKey = -1;
  //extend our methods
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  //increment the backKey and store the value at the storage.backKey
  enqueue: function (value) {
    this.backKey ++;
    this.storage[this.backKey] = value;
  },
  //return if backKey is less than frontKey, otherwise store the value at frontKey in a temp variable, delete the value at frontKey, increment frontKey, return temp
  dequeue: function () {
    if (this.backKey < this.frontKey) {
      return;
    }
    var temp = this.storage[this.frontKey];
    delete this.storage[this.frontKey];
    this.frontKey ++;
    return temp;
  },
  //returns the size of the Queue
  size: function () {
    return this.backKey - this.frontKey + 1;
  }
};


