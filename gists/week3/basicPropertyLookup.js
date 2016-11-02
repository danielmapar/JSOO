var gold = {a: 1};
console.log(gold.a); // 1
console.log(gold.z); // undefined


function extend(newObj, objToCopy) {
	for (var i in objToCopy) {
		if (objToCopy.hasOwnProperty(i)) {
			newObj[i] = objToCopy[i];
		}
	}
	return newObj;
};


var blue = extend({}, gold);
blue.b = 2;
console.log(blue.a); // 1
console.log(blue.b); // 2
console.log(blue.z); // undefined

// gold.z = 10;
// console.log(blue.z); // undefined


/*
// Delegates failed lookups to the lookback
var rose = Object.create(gold);
rose.b = 2;
console.log(rose.a);
console.log(rose.b); // not a failed lookup
console.log(rose.z); // undefined
*/

/*
// Curiosity 
var objNew = {};
Object.prototype.waffle = "yes!";
console.log(Object.prototype.toString);
console.log(objNew.waffle);

function MyConstructor() {}

console.log(objNew.constructor);
objNew.constructor = MyConstructor;
console.log(objNew.constructor);

// Arrays example

var arr = new Array();
var arr2 = [];

console.log(arr.constructor);
console.log(arr2.constructor);
*/

