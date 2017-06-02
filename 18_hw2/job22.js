var operation = require('./operation22');
var jobArray = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}];

for(var i = 0; i < jobArray.length; i++) {
	var job = 'job' + '(' + jobArray[i].x + ', ' + jobArray[i].y + ')';
	console.log(job);
	
	operation.add(jobArray[i].x, jobArray[i].y, function(result){
		console.log('\t' + job + ' = ' + result);
	});
}