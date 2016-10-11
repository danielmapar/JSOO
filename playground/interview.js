function sum (a, b) {
	return a + b + this; 
}

var a = sum;

console.log("First: ", a(10, 20)); // error 

console.log("Second: ", a.call(30, 10, 20)); // 60 

console.log("Third: ", a.apply(30, [10, 20])); // 60

a = a.bind(40);
console.log("Fourth: ", a(10, 20)); // 70


var obj = {
	number: 20,
	fun: function(num) {
		this.number = num;
	}
};
obj.fun(30); 
console.log("Fifth: ", obj.number); // 30


