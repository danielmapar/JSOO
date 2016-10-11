//What is proto?
var cat = {
	breed: 'Munchikin'
};

var myCat = {
	name: "John"
};

Object.setPrototypeOf(myCat, cat);

console.log(myCat.__proto__ === cat)

// This guy is the same as cat
// This is not an instance, this is a reference
console.log(myCat.__proto__);

cat.newProperty = 12;

console.log(myCat.__proto__); 

// Global object prototype
var koala = {};
console.log(koala.__proto__ === Object.prototype);

Object.prototype.waffle = "lol";

console.log(koala.waffle);

function Animal() {}

Animal.prototype.name = "Daniel";

function Dog() {
	// this = Object.create(Dog.prototype)
	// return this;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.breed = "Bulldog";

var myDoggle = new Dog();

function findProto(obj, name) {
	console.log(obj[name]);
	if (!obj[name]) {
		findProto(obj.__proto__, name);
	} else {
		return obj[name];
	}
}

console.log(findProto(myDoggle, "name"));

