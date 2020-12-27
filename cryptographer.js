const Convert = require('./convert')
const convert = new Convert;

class Cryptographer {
  crypt(msg, key) {
    let arrCrypt = [];
  
    const converted_msg = convert.textToUTF16(msg);
   
    for(let car of converted_msg){
      arrCrypt.push(car^key)
    }
    
    return arrCrypt;
  }

  decrypt(msg_crypt, key) {
    let arrMsg = [];

    for(let car of msg_crypt) {
      arrMsg.push(car^key)
    }

    return convert.utf16ToText(arrMsg);
  }
}

module.exports = Cryptographer;