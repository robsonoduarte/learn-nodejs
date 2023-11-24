const fs = require('fs');
const bs = require("byte-size")

const read = function (file) {
    const start = new Date();
    const data = bs(fs.readFileSync(file).length)
    const total = new Date() - start
    console.info(`Read file size ${data.value}${data.unit} sync in ${total}ms`)
};

module.exports = read
