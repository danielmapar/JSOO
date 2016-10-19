var fn = function(one, two) {
	console.log(this, one, two);
};

var setTimeout = function(cb, ms) {
	//waitSomehow(ms)
	cb();
};

// Lets say it was setTimeout, we would need to read the implementation
setTimeout(fn, 10);

// http://stackoverflow.com/questions/11605917/this-vs-scope-in-angularjs-controllers

// What if I passed the function inside an object?
var fn2 = function(one, two) {
	console.log(this.num, one, two);
};

var obj = {
	fn: fn2,
	num: 10
};

var setTimeout2 = function(obj, ms) {
	//waitSomehow(ms)
	obj.fn();
};

setTimeout2(obj, 10);

// Still not good right? We dont have access to the setTimeout2 implementation
var fn3 = function(one, two) {
	console.log(this.num, one, two);
};

var obj2 = {
	fn: fn3,
	num: 10
};

setTimeout(function() {
	obj2.fn(20, 30);
}, 10);