// Refactor the carlike function in a way
// that allows you to use the method calling
// syntax with "dot access" as we do below.
var carlike = function(obj, loc) {
    obj.loc = loc;
    // Moving the function to the actual obj created a new function obj
    // for every call
    /*obj.move = function() {
      this.loc++;
    };*/
    obj.move = function() {
      obj.loc++;
    };
    return obj;
};

// separated function
var move = function() {
  this.loc++;
};


/////
// Here we want to call move with "dot access"
var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();
