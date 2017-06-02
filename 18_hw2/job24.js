var operation = require('./operation24');
var jobArray = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}];

for(var i = 0; i < jobArray.length; i++) {
	(function(x, y) {
		var job = 'job' + '(' + x + ', ' + y + ')';
		console.log(job);
		
		var result = "";
		operation.add(x, y, function(addResult){
			result += addResult + ', ';
			operation.sub(x, y, function(subResult){
				result += subResult + ', ';
				operation.mul(x, y, function(mulResult){
					result += mulResult+ ', ';
					operation.div(x, y, function(divResult){
						result += divResult;
						console.log('\t' + job + ' = [' + result + ']');
					})
				})
			})
		});
	})(jobArray[i].x, jobArray[i].y);
}