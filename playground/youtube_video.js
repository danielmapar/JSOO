var Person = function(name, age) {
	this.name = name;
	this.age = age;
	this.getName = function () {
		return this.name
	};
	this.getAge = function () {
		return this.age
	};
};

/*
Passing in an object, however, passes it in by reference.
In this case, any property of that object is accessible within the 
function. Let’s take a look at another example:
*/
var daniel = new Person("Daniel", 23);

console.log(daniel);

function changeName(person) {
	person.name = "Test";
};

changeName(daniel);

console.log(daniel);


var obj = {
	num: 10
};

function changeObj(ob) {
	ob.number = 20;
}

console.log(obj);
console.log(changeObj.length);