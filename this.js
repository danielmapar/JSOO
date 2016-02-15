var test = 10;

var chupa = function(a ,b) {
	console.log(this);
}

chupa(1,2); // this will use the global scope
chupa.call(test, 1, 2);

// beside the dot (obj.fn) rule, you can bound values to the parameter this
// by using .call

var r = {value: 100};
r.method = chupa;
r.method(1, 2);
r.method.call(test, 1, 2);


setTimeout(r.method, 1000); // this will not be binded to R, since it is just
// passing the function

setTimeout(function() {
	r.method(); // This will bind to R.
}, 1000);

// var setTimeout = function(cb, time) {
// ...
// cb()
//}

var obj = new r.method(1, 2); // creates a new obj 
