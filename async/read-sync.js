var fs = require('fs')

var read = function(file){
	var start = new Date()
	fs.readFileSync(file)
	console.info('Total Time in sync %dms', new Date() - start )
}

module.exports = read
