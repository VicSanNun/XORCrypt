class Convert {
  /*https://stackoverflow.com/questions/14430633/how-to-convert-text-to-binary-code-in-javascript*/
  textToUTF16(text) {
    const length = text.length;
    let out = [];
   
    for(let i = 0;i < length; i++) {
      out.push(text[i].charCodeAt());
    } 
   
    return out;
  }

  utf16ToText(utf16) {

    const length = utf16.length;
    let out = [];

    for(let i = 0; i < length; i++) {
      out.push(String.fromCharCode(utf16[i]))
    }

    return out;

  }
}

module.exports = Convert;

