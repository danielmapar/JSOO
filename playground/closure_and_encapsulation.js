var Car = (function() {

  // Create a store to hold the private objects.
  var privateStore = {};
  var uid = 0;

  function Car(mileage) {
    // privateStore = {
    //  0: {
    //   mileage: 10
    // }
    //}
    // this = {
    //  id: 0
    //}
    // Create an object to manage this instance's state and
    // use a unique ID to reference it in the private store.
    privateStore[this.id = uid++] = {};
    // Store private stuff in the private store
    // instead of on `this`.
    privateStore[this.id].mileage = mileage || 0;
    // return this;
  }

  Car.prototype.drive = function(miles) {
    if (typeof miles == 'number' && miles > 0)
      privateStore[this.id].mileage += miles;
    else
      throw new Error('drive can only accept positive numbers');
  };

  Car.prototype.readMileage = function() {
    return privateStore[this.id].mileage;
  };

  return Car;
}());

var honda = new Car(10);