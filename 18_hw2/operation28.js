function add(x, y) {
	return new Promise(function(resolve, reject){
		resolve(x + y + '<+>');
	});
}

function sub(x, y) {
	return new Promise(function(resolve, reject){
		resolve(x - y + '<->');
	});
}

function mul(x, y) {
	return new Promise(function(resolve, reject){
		resolve(x * y + '<*>');
	});
}

function div(x, y) {
	return new Promise(function(resolve, reject){
		if(y !== 0)
			resolve(x + y + '<+>');
		else
			reject('invalid job');
	});
}

module.exports = {
	add: add,
	sub: sub,
	mul: mul,
	div: div,
}