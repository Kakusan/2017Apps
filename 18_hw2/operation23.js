function add(x, y, doResult) {
	setTimeout(function() {
		doResult(x + y + '<+>');
	}, 1000);
}

module.exports = {
	add: add
}