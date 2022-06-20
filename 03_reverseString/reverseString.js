const reverseString = function(string) {
    let output = "";
    for (let i = 0; i < string.length; i++){
        output += string.slice(string.length-i-1, string.length-i);
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
