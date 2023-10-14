

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(key, value) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //check if storage at index is undefined
  if (this._storage.get(index) === undefined) {
    //create a new bucket array with key value tuple inside
    var newBucket = [[key, value]];
    //use set to add the bucket onto the array
    this._storage.set(index, newBucket);
  } else {
  //since storage at index has an array
  //store a reference to that bucket array using get and index
    var bucket = this._storage.get(index);
    //iterate though the bucket array
    for (let i = 0; i < bucket.length; i ++) {
    //if our input key matches our bucket tuple key
      if (bucket[i][0] === key) {
        //overwrite the bucket tuple value with our input value
        bucket[i][1] = value;
        return;
      }
    }
    //if it doesnt exist then we just push our new key value pair tuple onto our bucket
    bucket.push([key, value]);
  }



  //this._storage.set(index, value);
};

HashTable.prototype.retrieve = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //store a reference to index in the hash table using get
  var bucket = this._storage.get(index);
  //check if bucket is undefined
  if (bucket === undefined) {
    return;
  }
  //iterate through bucket
  for (let i = 0; i < bucket.length; i ++) {
    //check if the input key matches our tuple key
    if (bucket[i][0] === key) {
      //return tuple value
      return bucket[i][1];
    }
  }
  //return undefined


  //access our storage array at the index using get and return it
  //return this._storage.get(index);
};

HashTable.prototype.remove = function(key) {
  var index = getIndexBelowMaxForKey(key, this._limit);
  //store reference to bucket
  var bucket = this._storage.get(index);
  //check if bucket undefined
  if (bucket === undefined) {
    return;
  }
  // check if bucket has only one value
  if (bucket.length === 1) {
    //check if that tuple key matches input key
    if (bucket[0][0] === key) {
      //nuke it
      this._storage.set(index, undefined);
    }
    return;
  }
  //iterate through bucket
  for (let i = 0; i < bucket.length; i++) {
    //check if tuple key matches input key
    if (bucket[i][0] === key) {
      //splice that tuple out at i
      bucket.splice(i, 1);
      //return
      return;
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 * .insert method is O(n)
 * .retrieve method is O(n)
 * .remove method is O(n)
*/


