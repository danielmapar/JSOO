//prototype chaining

// object prototype, provides all the shared properties to all objects
// in the entire system -> Object.prototype

/*
All objects in JavaScript are descended from Object; 
all objects inherit methods and properties from Object.prototype,
 although they may be overridden (except an Object with a null prototype, 
 i.e. Object.create(null)). For example, other constructors' 
 prototypes override the constructor property and provide their own 
  toString() methods.
*/

/*
Other objects like Arrays have some extra prototypes, like the
Array.protoype that contains:
-> slice()
-> toString()
-> constructor
*/

var obj = {
	a: 1
};

// object lookup
var obj2 = Object.create(obj);

obj2.b = 2;


console.log("obj2: ", obj2);
console.log("obj2.a: ", obj2.a);


obj.a = 10;

console.log("obj2: ", obj2);
console.log("obj2.a: ", obj2.a);

var obj3 = Object.create(obj2);

console.log("obj3: ", obj3);
console.log("obj3.a: ", obj3.a);