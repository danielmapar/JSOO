function personCreator(name) {
	// this = {};
	this.name = name;
	console.log(this);
	// return this;
}

var person = personCreator("Daniel");

console.log(person);