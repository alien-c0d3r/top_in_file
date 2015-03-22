 var fs = require('fs');

function generateData(total,cb){
	var randomIntInc=function (low, high) {
	    return Math.floor(Math.random() * (high - low + 1) + low);
	}

	var data='';
	for(var i=0;i<total;i++){
		data+=randomIntInc(0,total)+',';
	}
	

	data=data.substring(0,data.length-1);

	fs.writeFile("./data/sample_data", data, function(err) {
	    if(err) {
	         console.log(err);
	         cb(err,false);
	    }

	    cb(null,true);
	}); 
}

module.exports = generateData;