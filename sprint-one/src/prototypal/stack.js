var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.numKey = -1;
  return someInstance;
};

var stackMethods = {

  push: function(value) {
    this.numKey ++;
    this.storage[this.numKey] = value;
  },

  pop: function() {
    if (this.numKey === -1) {
      return;
    }
    var temp = this.storage[this.numKey];
    delete this.storage[this.numKey];
    this.numKey --;
    return temp;
  },

  size: function() {
    return this.numKey + 1;
  }
};

