var Queue = function() {
  this.storage = {};
  this.frontKey = 0;
  this.backKey = -1;
};

Queue.prototype.enqueue = function (value) {
  this.backKey ++;
  this.storage[this.backKey] = value;
};
Queue.prototype.dequeue = function () {
  if (this.backKey < this.frontKey) {
    return;
  }
  var temp = this.storage[this.frontKey];
  delete this.storage[this.frontKey];
  this.frontKey ++;
  return temp;
};
Queue.prototype.size = function () {
  return this.backKey - this.frontKey + 1;
};



