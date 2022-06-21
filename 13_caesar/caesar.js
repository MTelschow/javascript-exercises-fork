const caesar = function(text, amount) {
    while(amount < 0){
        amount += 26;
    }
    let unicode = [];
    for(let i =0; i < text.length; i++){
        unicode.push(text.charCodeAt(i));
    }

    let cyperUnicode = unicode.map(function(code){
        if(code > 64 && code < 91){
            return (code%65 + amount)%26 + 65;
        }
        if(code > 96 && code < 123){
            return (code%97 + amount)%26 + 97;
        }
        return code;
    })

    let cyper = cyperUnicode.reduce((cyperText, char) => {
        return cyperText + String.fromCharCode(char);
    }, "")

    return cyper;
    // return cyperUnicode[0];
};

// Do not edit below this line
module.exports = caesar;
