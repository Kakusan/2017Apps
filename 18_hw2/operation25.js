function add(x, y, doResult) {
	setTimeout(function() {
		doResult(null, x + y + '<+>');
	}, 1000);
}

function sub(x, y, doResult) {
	setTimeout(function() {
		doResult(null, x - y + '<->');
	}, 1000);
}

function mul(x, y, doResult) {
	setTimeout(function() {
		doResult(null, x * y + '<*>');
	}, 1000);
}

function div(x, y, doResult) {
	setTimeout(function() {
	if(y !== 0)
		doResult(null, (x / y).toFixed(2) + '</>');
	else
		doResult('invalid job', null);
	}, 1000);
}

module.exports = {
	add: add,
	sub: sub,
	mul: mul,
	div: div,
}