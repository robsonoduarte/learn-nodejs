var http = require('http')

var server = http.createServer(function(req,rsp){
	rsp.writeHead(200, {'Content-Type': 'text/html'})
	rsp.write('<h1>Hello World!</h1>')
	rsp.end()
});

server.listen(3000, function(){
	console.log('The Server is running')
})



