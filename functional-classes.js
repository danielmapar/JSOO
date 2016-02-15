var _ = require("underscore");

// Class builds objects, and decorators accepts objects and extends it
var Car = function(loc) {
    var obj = {loc: loc};
    _.extend(obj, Car.methods)
    return obj;
};

// Function objs works similar to normal objs (ex: {})
// We can also bound values to it!
// Simple property access
Car.methods = {
  move: function() {
    this.loc++;
  }
};

var amy = Car(1);
amy.move();
var ben = Car(9);
ben.move();
