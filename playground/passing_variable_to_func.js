
var number = 10;
var string = "Daniel";
var arr = [1,2,3,4];
var obj = {
    number: 1
};

function changeNumber(n) {
    n = 20;
}

function changeString(s) {
    s = "Pedro";
}

function changeArr(arr2) {
    arr2.push(10);
    //arr2 = [4,3,2,1];
}

function changeObj(ob) {
    ob.mudei = 1;
    delete obj.number;
}

changeNumber(number);
changeString(string);
changeArr(arr);
changeObj(obj);

console.log("Number: ", number);
console.log("String: ", string);
console.log("Array: ", arr);
console.log("Object: ", obj);