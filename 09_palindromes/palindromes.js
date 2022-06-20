const palindromes = function (string) {
    let result = true;
    let letters = string.toLowerCase().replace(/\W/g,'');
    for(let i = 0; i < letters.length/2; i++){
        if (letters.charAt(i) !== letters.charAt(letters.length - i -1)){
            result = false;
        }
    }
    return result;
};

// Do not edit below this line
module.exports = palindromes;
