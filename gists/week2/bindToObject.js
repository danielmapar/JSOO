function bonusCalculator(number1, number2) {
	return (number1 + number2) * this.bonusScore;
}

var obj = {
	bonusScore: 5,
	bonusCalculator: bonusCalculator,
	getBonus: function() {
		return this.bonusScore;
	}
};

console.log("My income is: ", obj.fn(5, 5));

console.log("My bonus is: ", obj.getBonus());

/*
function setBonus(number) {
	this.bonusScore = number;
}

obj.setBonus = setBonus;

obj['setBonus'](10);

console.log("My bonus is: ", obj.getBonus());
*/