function aHero() {
	return "Boy";
}

function aFoil(num) {
	switch (num) {
		case 1:
			return "Rat";
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
			return "Digs";
		default:
			return "Nothing";
	}
}

var sagas = []; // we could also return saga from newSaga to retain access
var hero = aHero(); // Boy
var newSaga = function(num) {
	var foil = aFoil(num); // Knife
	sagas.push(function(num) {
		var deed = aDeed(num); // Eyes
		console.log(hero + " --> " + deed + " --> " + foil);
	}); // let`s push a function object to our sagas array

	sagas.push(function(num) {
		var deed = aDeed(num); // Eyes
		console.log(hero + " --> " + deed + " --> " + foil);
	}); // let`s push a function object to our sagas array
};

newSaga(1);
sagas[0](1); // we use index 0, to reference the first "newSaga(1)" call
sagas[1](2);

console.log("----------");

// brand new red context (New foil variable)
//newSaga(2); 
//sagas[1](1); // we use index 1, to reference the first "newSaga(2)" call
//sagas[1](2);