

// that is an object decorator
function car(obj, loc) {
	obj.loc = loc;
	obj.move = move;
	/*function() {
		obj.loc++;
		// OR
		// this.loc++;
	};*/
	return obj;
} 

function move() {
	this.loc++;
}