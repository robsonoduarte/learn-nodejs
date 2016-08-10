var http = require('http')
var url = require('url')

var server = http.createServer(function(req,rsp){
	
	var result = url.parse(req.url,true)
	console.log(result)
	rsp.writeHead(200, {'Content-Type': 'text/html'})
	rsp.write('<h1> You are in ' + result.pathname  + '</h1>')
	rsp.end()
});



server.listen(3000, function(){
	console.log('The Server is running')
})



