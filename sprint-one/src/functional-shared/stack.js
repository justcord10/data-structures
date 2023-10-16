var Stack = function() {
  var someInstance = {};

  someInstance.storage = {};
  someInstance.numKey = -1;

  _.extend(someInstance, stackMethods);

  return someInstance;
};


var stackMethods = {
  //increments numKey and adds value into the stack
  push: function (value) {
    this.numKey ++;
    this.storage[this.numKey] = value;
  },
  //returns if numKey is -1 otherwise it stores the value at numKey in a temp variable, deletes the value stored at numKey, de-increments numKey and returns temp value
  pop: function () {
    if (this.numKey === -1) {
      return;
    }
    var temp = this.storage[this.numKey];
    delete this.storage[this.numKey];
    this.numKey --;
    return temp;
  },
  //returns numKey + 1
  size: function () {
    return this.numKey + 1;
  }
};


