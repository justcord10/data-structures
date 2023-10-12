class Stack {
  constructor() {
    this.storage = {};
    this.numKey = -1;
  }
  push(value) {
    this.numKey ++;
    this.storage[this.numKey] = value;
  }
  pop() {
    if (this.numKey === -1) {
      return;
    }
    var temp = this.storage[this.numKey];
    delete this.storage[this.numKey];
    this.numKey --;
    return temp;
  }
  size() {
    return this.numKey + 1;
  }

}