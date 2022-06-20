const sumAll = function(int1, int2) {
    if(int1 > int2){
        let temp = int1;
        int1 = int2;
        int2 = temp;
    }
    if (typeof(int1) === typeof(int2) &&
            typeof(int1) ===  "number" &&
            int1 >= 0){
        result = 0;
        for(let i = int1; i <= int2; i++) {
            result += i;
        }
        return result;
    }
    return "ERROR";
};

// Do not edit below this line
module.exports = sumAll;
