var total = 10;

function exec() {

	var total = 20;

	var fun = function(param) {
		var fun2 = function(num) {
			return total + num;
		}
		return param + fun2(10);
	}

	console.log(fun(10));

}

exec();