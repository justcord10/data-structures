var Queue = function() {
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.frontKey = 0;
  someInstance.backKey = -1;

  return someInstance;
};

var queueMethods = {
  enqueue: function(value) {
    this.backKey ++;
    this.storage[this.backKey] = value;
  },

  dequeue: function() {
    if (this.backKey < this.frontKey) {
      return;
    }
    var temp = this.storage[this.frontKey];
    delete this.storage[this.frontKey];
    this.frontKey ++;
    return temp;
  },

  size: function() {
    return this.backKey - this.frontKey + 1;
  }
};


