function magic(num1, num2) {
	console.log(this);
	return num1 + num2 + this;
}

console.log(magic.call(10, 10, 10));

var obj = {
	fn: magic
};

// It overwrites the "left of the dot" rule
console.log(obj.fn.call(20, 10, 10));
