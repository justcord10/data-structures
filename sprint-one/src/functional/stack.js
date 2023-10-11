var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numKey = -1;

  // Implement the methods below

  //increments the numKey by one
  //adds the passed in value to the top of the stack by assinging someInstance[numKey] = value;
  //

  someInstance.push = function(value) {
    //increment numKey by one
    numKey ++;
    //assign the value to the object at the appropriate numerical key
    someInstance[numKey] = value;

  };
  //removes the 'topmost' item on the stack and returns it
  someInstance.pop = function() {
    //if numKey is =-1 then return
    if (numKey === 0-1) {
      return;
    }

    //declare temp value and set it equal to property at numKey in our stack object
    var temp = someInstance[numKey];
    //delete the property at stack key numKey
    delete someInstance[numKey];
    //de-increment numKey by one
    numKey --;
    //return temp   value
    return temp;
  };
  //size just returns how many items are currently in the stack. (numKey+1)
  someInstance.size = function() {
    //return numKey+1
    return numKey + 1;
  };

  return someInstance;
};
