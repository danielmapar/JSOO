var Car = function(loc) {
  return {
    loc: loc
  };
};

Car.methods = {
  name: "John"
};

console.log(Car);

// Using bind

var dog = {
  sound: 'woof',
  talk: function() {
    console.log(this.sound)
  }
};

dog.talk(); // 'woof'
var talkFunction = dog.talk;
talkFunction(); // 'undefined'
var bindedFunction = talkFunction.bind(dog); 
bindedFunction(); // 'woof'


// Prototypal classes


// The language creator saw that this standard was so comum for creating classes,
// that they included an object on functions that already does the lookback
// Having said that, this object is called .prototype

var Person = function(name) {
  // lookback
  var obj = Object.create(Person.prototype);
  obj.name = name;
  return obj;
};

//Person.methods = {
//  getName: function() {
//    return this.name;
//  }
//};
// or
//Person.prototype.constructor -> this points to Person it self
Person.prototype.getName = function() {
  return this.name;
};

var Daniel = Person("Daniel");
console.log(Daniel.getName());


// Pseudoclassical Patterns

var Personv2 = function(name) {
  // lookback
  // the language will do for us: this = Object.create(Person.prototype)

  // when using the "new" keyword, this will be binded to the object it self
  // in this case "Daniel"
  this.name = name;
};

//Personv2.prototype = {
//  getName: function() {
//    return this.name;
//  }
//};
// or
Personv2.prototype.getName = function() {
  return this.name;
};

// The new keyword will include the
// this = Object.create(Person.prototype)
// return this;
// since whenever we use this, it bounds to the object it self
// in the case "Pedro"
var Pedro = new Personv2("Pedro");
console.log(Pedro.getName());
//Personv2.prototype.constructor -> this points to Personv2 it self
console.log(Personv2.prototype.constructor);

// Remember: the language will do for us: this = Object.create(Person.prototype)
console.log(Pedro.constructor);
console.log(Personv2.prototype.constructor === Pedro.constructor);
console.log(Pedro instanceof Personv2);


// Super class and sub class

var Parent = function(name) {
  this.name = name;
};

Parent.prototype.getName = function() {
  return this.name;
};

var Son = function(name, age) {
  this.name = name;
  this.age = age;
};

Son.prototype = Object.create(Parent.prototype);

Son.prototype.getAge = function() {
  return this.age;
};


var mySon = new Son("Daniel", 20);

console.log(mySon.getAge());
console.log(mySon.getName());

// Calling super class

var Person = function(name) {
  this.name = name;
};

Person.prototype.getName = function() {
  return this.name;
};

var Employee = function(name, number) {
  // this = Object.create(Employee.prototype);
  // remember that objects are passed by reference in JS
  // this is bound to employeeInstance, which is an object
  Person.call(this, name)
  this.number = number;
  // return this
};

Employee.prototype = Object.create(Person.prototype);

Employee.prototype.getNumber = function() {
  return this.number;
};

var employeeInstance = new Employee("Shamil", 10);
console.log(employeeInstance.getNumber());
console.log(employeeInstance.getName());

console.log(employeeInstance instanceof Person);

var objIsPassedByReference = {
  test: "Daniel"
};

function changeObj(objIsPassedByReference) {
  objIsPassedByReference.test = "Raaah!!";
}
changeObj(objIsPassedByReference);

console.log(objIsPassedByReference);


