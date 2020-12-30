const fs = require('fs')


class FileHandler {
    readFile(file) {
        return fs.readFileSync(file, 'utf8', (err, data) => {
            if(err) throw err;
            return data;
        });
    }

     writeFile(file, content) {
         try {
            fs.writeFileSync(file, content);
            console.log('File successfully created')
         } catch (error) {
            console.log(error)
         }
     }
}

module.exports = FileHandler;