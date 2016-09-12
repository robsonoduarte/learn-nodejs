var fs = require('fs')

var read = function(file){
	var start = new Date()
	fs.readFile(file)
	console.info('Total Time in async %dms', new Date() - start)
}

module.exports = read

