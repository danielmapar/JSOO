var animals = [
	{ name: "Fluffykins", species: 'rabbit' },
	{ name: "Caro", species: 'dog' },
	{ name: "Hamilton", species: 'dog' },
	{ name: "Harold", species: 'fish' },
	{ name: "Ursula", species: 'cat' },
	{ name: "Jimmy", species: 'fish' }
];

var dogs = [];
for(var i = 0; i < animals.length; i++) {
	if(animals[i].species === 'dog') {
		dogs.push(animals[i]);
	}
}

Array.prototype.myFilter = function(func) {
	var output = [];
	for(var i = 0; i < this.length; i++) {
		if(func(this[i])) {
			output.push(this[i]);
		}
	}
	return output;
}

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i], i);
	}
}

Array.prototype.myMap = function(func) {
	var output = [];
	for(var i = 0; i < this.length; i++) {
		output.push(func(this[i]));
	}
	return output;
}

var dogs2 = animals.myFilter((animal) => animal.species === 'dog');
//console.log(dogs2);

//animals.myForEach((animal, i) => console.log("Index: ", i, " animal: ", animal.name));

var mapOutput = animals.myMap((animal) => animal.name);

console.log(mapOutput);


/*
Array.prototype.myFilter = function(func) {
	var output = [];
	for(var i = 0; i < this.length; i++) {
		if(func(this[i])) {
			output.push(animals[i]);
		}
	}
	return output;
}

Array.prototype.myForEach = function(func) {
	for(var i = 0; i < this.length; i++) {
		func(this[i], i);
	}
}

Array.prototype.myMap = function(func) {
	var output = [];
	for(var i = 0; i < this.length; i++) {
		output.push(func(this[i]));
	}
	return output;
}

var animalsFilter = animals.myFilter(function(animal) {
	return animal.species === 'dog';
});

console.log("animalsFilter: ", animalsFilter);

animals.myForEach(function(animal, index) {
	console.log("Animal: ", animal.name, " index: ", index);
});

var animalsMap = animals.myMap(function(animal) {
	return animal.name;
});

console.log("animalsMap: ", animalsMap);

/*
var dogs = [];
for(var i = 0; i < animals.length; i++) {
	if(animals[i].species === 'dog') {
		dogs.push(animals[i]);
	}
}
*/