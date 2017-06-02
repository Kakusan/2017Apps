var operation = require('./operation27');
var jobArray = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}, {x: 0, y: 0}];

for(var i = 0; i < jobArray.length; i++) {
	(function(x, y) {
		var job = 'job' + '(' + x + ', ' + y + ')';
		console.log(job);
		
		var result = "";
		Promise.all([
			operation.add(x, y),
			operation.sub(x, y),
			operation.mul(x, y),
			operation.div(x, y)
		]).then(
			function(results){
				for(var index in results) {
					result += results[index];
					if(index != 3)
						result += ', ';
					else
						console.log('\t' + job + ' = [' + result + ']');
				}
			}, 
			function(error){
				console.log('\t' + job + ' = ' + error);	
			});	
	})(jobArray[i].x, jobArray[i].y);
}