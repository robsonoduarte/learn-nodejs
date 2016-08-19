var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,resp){
	
	fs.readFile(__dirname + '/index.html', function(error,html){
		resp.writeHeader(200, {'Content-Type': 'text/html'})		
		resp.write(html)
		resp.end()
	})

})


server.listen(3000,function(){
	console.log('Sever is Running')
})
