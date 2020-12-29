const Cryptographer = require('./cryptographer')
const FileHandler = require('./filehandler');

const cryptographer = new Cryptographer;
const fileHandler = new FileHandler;

const cryptText = (cryptographer.crypt("Victor", 1739))
console.log(cryptText)

const decryptText = cryptographer.decrypt(cryptText, 1739)
console.log(decryptText)

const data = fileHandler.readFile('a.txt');
console.log(data)

const cryptText2 = (cryptographer.crypt(data, 1739))
console.log(cryptText2)