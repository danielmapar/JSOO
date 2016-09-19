function myobject()
{
	this.value = 5;
}
myobject.prototype.add = function()
{
	this.value++;
}
var o = new myobject();
alert(o.value); // o.value = 5
o.add();
alert(o.value); // o.value = 6
function objectchanger(fnc)
{
	fnc(); // runs the function being passed in
}
objectchanger(o.add);
alert(o.value); // sorry, still just 6
