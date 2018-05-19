// This is a constructor
var Car = function(loc) {
  this.loc = loc;
};

Car.prototype.move = function() {
  this.loc++;
};

// Van.prototype has a relation with Object.prototype
// We need to set a relation between Van.prototype and Car.prototype to
// be able to call move()
var Van = function(loc) {
  // this = Object.create(Van.prototype)
  // {}
  Car.call(this, loc); // biding Van "this" to be used as Car "this"
  // return this;
};

Van.prototype.grab = function() {
  console.log("GRAB");
};

// Fail lookups on Van will go to Car
Van.prototype = Object.create(Car.prototype);
// Since all the fail lookups are going to Car.prototype, ".constructor" will be Car
Van.prototype.constructor = Van;
// doing "Van.prototype = new Car()" is broke, dont do it!

var zed = new Car(3);
zed.move();

var amy = new Van(9);
amy.move();
amy.grab();
