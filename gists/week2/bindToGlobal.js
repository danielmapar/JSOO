function sum(num1, num2) {
	return num1 + num2 + this;
}

//console.log(sum(10, 20));

/*function global() {
	console.log(this);
}

//console.log(global());

exports.number = 10;
var number2 = 20;

console.log(this);
console.log(this.number);
console.log(this.number2);*/
console.log(sum(10, 20));
