var fs = require('fs')

var read = function(file){
	console.log('reading sync...')
	fs.readFileSync(file)
}

module.exports = read
