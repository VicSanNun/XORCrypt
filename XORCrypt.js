const Cryptographer = require('./cryptographer')
const FileHandler = require('./filehandler');

const cryptographer = new Cryptographer;
const fileHandler = new FileHandler;

func = process.argv[2];

if(func == '--help' || func == '-h') {
    usage();
}
else if(func == '--crypt' || func == '-c') {
    const file = process.argv[3];
    const key = process.argv[4];
    const outFile = process.argv[5];
    const readFile = fileHandler.readFile(file);
    const cryptText = cryptographer.crypt(readFile, key)
    console.log(typeof Object.entries(cryptText))
    const writeFile = fileHandler.writeFile(outFile, cryptText)
    console.log(writeFile)
}
else if(func == '--decrypt' || func == '-d'){
    //decrypt();
}
else if(func == '--message_digest' || func == '-md'){
    //ms();
}
else {
    unhandledOpt();
}

const cryptText = (cryptographer.crypt("Victor", 1739))
//console.log(cryptText)

const decryptText = cryptographer.decrypt(cryptText, 1739)
//console.log(decryptText)

const data = fileHandler.readFile('a.txt');
//console.log(data)

const cryptText2 = (cryptographer.crypt(data, 1739))
//console.log(cryptText2)

function usage() {
    let devices = [
        {
            example: 'node XORCrypt.js -c file.txt crypt.txt 1264',
            descripton: 'Crypt the file.txt using 1264 with key and writing the crypt text in crypt.txt'
        },
        {
            example: 'node XORCrypt.js -d crypt.txt file.txt 1264',
            descripton: 'Decrypt the crypt.txt using 1264 with key and writing the plain text in file.txt'
        },
        {
            example: 'node XORCrypt.js -md file.txt hashed.txt',
            descripton: 'Apply a hash algorithm to file.txt and writing the hashed text in hashed.txt'
        }
    ]
    console.log("\x1b[31m", '\n*******XOR Crypt & Hash********\n', "\x1b[0m")
    console.log('Execute:' + "\x1b[34m",'node XORCrypt.js [function] [infile] [outfile] [opt: key]\n', "\x1b[0m")
    console.log('Examples:\n ')
    console.table(devices)
}

function unhandledOpt() {
    console.log("\x1b[31m",'An Unhandled Option', "\x1b[0m");
}