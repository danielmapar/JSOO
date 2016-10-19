function sum(num1, num2) {
	return num1 + num2 + this.num3;
}

var mySum = sum.bind({num3: 30});
console.log(sum(10, 20));
console.log(mySum(10, 20));