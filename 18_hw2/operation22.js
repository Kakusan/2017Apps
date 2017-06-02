function add(x, y, doResult) {
	doResult(x + y + '<+>');
}

module.exports = {
	add: add
}