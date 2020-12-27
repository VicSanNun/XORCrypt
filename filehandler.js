const fs = require('fs')


class FileHandler {
    readFile(file) {
        const data = fs.readFile(file, 'utf8', (err, data) => {
            if (err) throw err;
            return data;
        });

        console.log(data)
    }
}

module.exports = FileHandler;