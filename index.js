
const Cryptographer = require('./cryptographer')


const cryptographer = new Cryptographer;

const text = (cryptographer.crypt("Victor", 1739))
console.log(text)

const t = cryptographer.decrypt(text, 1739)
console.log(t)