var http = require('http')
var fs =  require('fs')
var sync = require('./read-sync')
var async = require('./read-async')


var file = "node.js.tar.xz"
var stream = fs.createWriteStream(file)


http.get("http://nodejs.org/dist/v4.5.0/node-v4.5.0-linux-x64.tar.xz",function(rsp){

	rsp.on('data',function(data){
	    stream.write(data)				
	});

	rsp.on('end',function(){
	   stream.end()
	   async(file)	
	   sync(file)
	});
});





