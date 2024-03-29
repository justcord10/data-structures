// change set storage to be an object

var Set = function() {
  var set = Object.create(setPrototype);
  // set._storage = [];
  set._storage = {};
  return set;
};

//

var setPrototype = {};

setPrototype.add = function(item) {
//check if item exists in storage array
  if (this.contains(item)) {
    return;
  }
  //push it into storage array
  // this._storage.push(item);
  this._storage[item] = item;
};

setPrototype.contains = function(item) {
  //iterate through our storage array and
  // for (let i = 0; i < this._storage.length; i++) {
  //   //check if item is === to current index spot storage
  //   if (item === this._storage[i]) {
  //     return true;
  //   }
  // }
  if (item in this._storage) {
    return true;
  }
  return false;
};

setPrototype.remove = function(item) {
  //iterate through the set storage array
  // for (let i = 0; i < this._storage.length; i++) {
  //   //check if item is === to current index spot storage
  //   if (item === this._storage[i]) {
  //     //slice that mutha out
  //     this._storage.splice(i, 1);
  //   }
  // }
  delete this._storage[item];
};

// make tests on contains in spec

/*
 * Complexity: What is the time complexity of the above functions?
 */
