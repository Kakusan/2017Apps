var operation = require('./operation28');
var jobArray = [];

for(var i = 0, x = 1; i < 999; i++, x += 2) {
	jobArray.push({x: x, y: x+1});
}

jobArray.push({x: 0, y: 0});

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
			(results) => {
				for(var index in results) {
					result += results[index];
					if(index != 3)
						result += ', ';
					else
						console.log('\t' + job + ' = [' + result + ']');
				}
			}, 
			(error) => {
				console.log('\t' + job + ' = ' + error);	
			});	
	})(jobArray[i].x, jobArray[i].y);
}