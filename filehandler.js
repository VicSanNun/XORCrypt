const fs = require('fs')


class FileHandler {
    readFile(file) {
        return fs.readFileSync(file, 'utf8', (err, data) => {
            if (err) throw err;
            return data;
        });
    }

    // writeFile(text) {

    // }
}

module.exports = FileHandler;