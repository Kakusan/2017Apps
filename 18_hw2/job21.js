var operation = require('./operation21');
var jobArray = [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}];

for(var i = 0; i < jobArray.length; i++) {
	var job = 'job' + '(' + jobArray[i].x + ', ' + jobArray[i].y + ')';
	console.log(job);
	
	var result = operation.add(jobArray[i].x, jobArray[i].y);
	console.log('\t' + job + ' = ' + result);
}