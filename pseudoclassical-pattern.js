var Car = function Car(loc) {
    // when creating a instance by using "new", javascript will do the Object.create(Obj.prototype)
    // for usm and return the new obj;
    //this = Object.create(Car.prototype);
    this.loc = loc;
    //return this;
};

Car.prototype.move =  function() {
  this.loc++;
};

// The keyword this is possible when using "new"
var amy = new Car(1);
amy.move();
console.log(amy instanceof Car);
var ben = new Car(9);
ben.move();
console.log(amy.constructor === ben.constructor);
