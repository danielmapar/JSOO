"use strict"

var middleName = "My Hero";

function aHero() {
	var name = "Punisher";
	var middleName = "Hero";
	return formatName(name, middleName);
}

var formatName = function(name) {
	return name + " " + middleName;
};

var newSaga = function() {
};

var hero = aHero();

console.log(hero);
//console.log(middleName);