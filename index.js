const Cryptographer = require('./cryptographer')

const cryptographer = new Cryptographer;

const cryptText = (cryptographer.crypt("Victor", 1739))
console.log(cryptText)

const decryptText = cryptographer.decrypt(cryptText, 1739)
console.log(decryptText)