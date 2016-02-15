// Class builds objects, and decorators accepts objects and extends it
var Car = function(loc) {
    // Fail lookups will go to Car.methods --> check Protoype-chain to understand
    var obj = Object.create(Car.prototype);
    obj.loc = loc;
    return obj;
};

// Function objs works similar to normal objs (ex: {})
// We can also bound values to it!
// Simple property access

// Defaults name that comes with every class object is .prototype
// prototype is a container for methods (to create classes)
// prototype is just cosmetics

// .constructor is part of .prototype.constructor

// Every prototype object has a constructor object
// that points back to the guy that did Object.create
// (points back to the function it came attached to)

Car.prototype.move =  function() {
  this.loc++;
};

var amy = Car(1);
amy.move();
console.log(amy instanceof Car);
var ben = Car(9);
ben.move();
console.log(amy.constructor === ben.constructor);
