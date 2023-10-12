class Queue {
  constructor() {
    this.storage = {};
    this.frontKey = 0;
    this.backKey = -1;
  }
  enqueue(value) {
    this.backKey ++;
    this.storage[this.backKey] = value;
  }
  dequeue() {
    if (this.backKey < this.frontKey) {
      return;
    }
    var temp = this.storage[this.frontKey];
    delete this.storage[this.frontKey];
    this.frontKey ++;
    return temp;
  }
  size() {
    return this.backKey - this.frontKey + 1;
  }

}
