function aHero() {
	return "Gal";
}

function aFoil(num) {
	switch (num) {
		case 1:
			return "Cow";
		case 2: 
			return "Knife";
		default:
			return "Nothing";
	}
}

function aDeed(num) {
	switch (num) {
		case 1:
			return "Eyes";
		case 2: 
			return "Tips";
		default:
			return "Nothing";
	}
}
// foil = Cow
	
var hero = aHero();
var newSaga = function(num) {
	var foil = aFoil(num);
	var saga = function(num) {
		var deed = aDeed(num);
		console.log(hero + " --> " + deed + " --> " + foil);
		foil = 'NADA';
	}
	var saga2 = function(num) {
		var deed = aDeed(num);
		console.log(hero + " --> " + deed + " --> " + foil);
	}
	//saga(1);
	//saga(2); // let`s understand in-memory scopes
	return [saga, saga2];
};

var arr = newSaga(1);
// Cow
arr[0](3);
// NADA
arr[1](2);