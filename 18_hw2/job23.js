var operation = require('./operation23');
var jobArray = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}];

for(var i = 0; i < jobArray.length; i++) {
	(function(x, y) {
		var job = 'job' + '(' + x + ', ' + y + ')';
		console.log(job);
	
		operation.add(x, y, function(result){
			console.log('\t' + job + ' = ' + result);
		});
	})(jobArray[i].x, jobArray[i].y);
}