var fs = require('fs');

var generator = require('./generator')
var topper = require('./topper')


generator(process.argv[3],function(err,isDone){	
	if(isDone){
		topper();
	}	

});



