var fs = require('fs');

function topper(){

	fs.readFile("./data/sample_data","utf-8",function(err,data){

		if(err) {
			console.log(err);
		} else {
			var total=data.split(',');		

			//If we have not yet found k items, or the current item is larger than
	        // the smallest item on the heap,
	        var heap=[];
	        for(var i=0;i<total.length;i++){
	        	if (heap.length==0 || parseInt(total[i]) > heap[0]){
		            //# If the heap is full, remove the smallest element on the heap.
		            if(heap.length == process.argv[2]){
		            	heap.pop();
		            }
		            //add the current element as the new biggest.
		            heap.unshift(parseInt(total[i]));
	        	}
	        }    
			console.log(heap);
		}
		
		 

	});
}

module.exports = topper;