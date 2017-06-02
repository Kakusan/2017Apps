var async = require('async');
var operation = require('./operation26');
var jobArray = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}, {x: 0, y: 0}];

for(var i = 0; i < jobArray.length; i++) {
	(function(x, y) {
		var job = 'job' + '(' + x + ', ' + y + ')';
		console.log(job);
		
		var result = "";
		async.parallel([
			operation.add.bind(null, x, y),
			operation.sub.bind(null, x, y),
			operation.mul.bind(null, x, y),
			operation.div.bind(null, x, y)
		], function(error, results) {
				if(!error) {
					for(var index in results) {
						result += results[index];
						if(index != 3)
							result += ', ';
						else
							console.log('\t' + job + ' = [' + result + ']');
					}
				} else {
					console.log('\t' + job + ' = ' + error);
				}
			});	
	})(jobArray[i].x, jobArray[i].y);
}