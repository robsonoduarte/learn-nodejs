var fs = require('fs')

var read = function(file){
	console.log('reading async...')
	fs.readFile(file)
}

module.exports = read

