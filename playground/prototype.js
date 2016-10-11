var obj = {
	getName: function() {
		return this.name;
	}
};

var obj2 = {
	name: "Daniel"
};


console.log(Object.getPrototypeOf(obj)); // also known as __proto__
console.log(Object.getPrototypeOf(obj2));

Object.setPrototypeOf(obj2, obj); 

console.log(obj2.getName());
console.log(obj2.name);

var p = {};
var o = Object.create(p);
console.log(Object.getPrototypeOf(o)); // p
console.log(o.constructor.prototype); // Object.prototype


