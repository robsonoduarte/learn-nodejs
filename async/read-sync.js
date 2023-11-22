const fs = require('fs');

const read = function (file) {
	const start = new Date();
	fs.readFileSync(file)
	console.info('Total Time in sync %dms', new Date() - start)
};

module.exports = read
