var Stack = function() {
  this.storage = {};
  this.numKey = -1;
};

Stack.prototype.push = function(value) {
  this.numKey ++;
  this.storage[this.numKey] = value;
};
Stack.prototype.pop = function() {
  if (this.numKey === -1) {
    return;
  }
  var temp = this.storage[this.numKey];
  delete this.storage[this.numKey];
  this.numKey --;
  return temp;
};
Stack.prototype.size = function() {
  return this.numKey + 1;
};


