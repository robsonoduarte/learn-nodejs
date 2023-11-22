const fs = require('fs');

const read = function (file) {
	const start = new Date();
	fs.readFile(file, () => {})
	console.info('Total Time in async %dms', new Date() - start)
};

module.exports = read