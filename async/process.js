const http = require('http');
const fs = require('fs');
const sync = require('./read-sync');
const async = require('./read-async');


const file = "node.js.tar.xz";
const stream = fs.createWriteStream(file);


http.get("http://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x64.tar.xz",function(rsp){
	console.log('Starting Download')
	rsp.on('data',function(data){
	    stream.write(data)				
	});
	rsp.on('end',function(){
	   stream.end()
	   console.log('Finished Download')	
	   async(file)	
	   sync(file)
	});
});






