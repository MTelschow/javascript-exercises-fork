const removeFromArray = function(array, ...others) {
    for (let item of others){
        if (array.includes(item)){
            let location = array.indexOf(item);
            array.splice(location, 1);
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
