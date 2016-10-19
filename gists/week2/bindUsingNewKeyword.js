function personCreator(name) {
	this.name = name;
}

var person = new personCreator("Daniel");

console.log("person: ", person.name);