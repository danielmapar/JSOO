function magic(num1, num2) {
	return num1 + num2 + this;
}

// parameter unpacking (like the ... on ES6)
console.log(magic.apply(10, [10, 10]));