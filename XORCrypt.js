const Cryptographer = require('./cryptographer')
const FileHandler = require('./filehandler');

const cryptographer = new Cryptographer;
const fileHandler = new FileHandler;

func = process.argv[2];

if(func == "-h" || func == "--help") {
    usage();
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