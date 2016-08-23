var http = require('http')
var url = require('url')
var fs = require('fs')


var server = http.createServer(function(req,rsp){

        var page = url.parse(req.url,true).pathname +  ".html"

        fs.readFile(__dirname + page, function(error,html){
	       if (err) {
		 rsp.writeHeader(404, {'Content-Type': 'text/html'})
		 rsp.write("Page not found")	
	       }else {
		  rsp.writeHeader(200, {'Content-Type': 'text/html'})  
	          rsp.write(html)
              }	
              rsp.end()
        })
});




server.listen(3000, function(){
	console.log('The Server is running')
})
