//"use strict"

// Global Scope

// A new lexical scope is created every time you type out a function definition.
// Other bracket constructs use the global scope
function aHero() {
	var name = "Punisher"; // Can't access this from the global scope
	middleName = "Hero"; // This variable is actually being created in the global scope (that is why we use "use strict")
	return formatName(name, middleName);
}


var formatName = function(name, middleName) {
	return name + " " + middleName;
};

var newSaga = function() {
	// New lexical scope
};

var hero = aHero();

console.log(hero);
//console.log(middleName);