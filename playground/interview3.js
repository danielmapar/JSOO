var obj = {
	num: 10
},
num = 10,
str = "Interview";

function changeObj(newObj) {
	newObj.num = 40;
}

function changeStr(newStr) {
	newStr = "Funfunfunction";
}

function changeNum(newNum) {
	newNum = 20;
}


changeObj(obj);
changeStr(str)
changeNum(num)

console.log("obj: ", obj); // 40
console.log("num: ", num); // 10
console.log("str: ", str); // "Interview"

