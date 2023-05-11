const removeFromArray = function(array) {
    for (let i = 1; i < arguments.length; i++){
        let index = array.indexOf(arguments[i])

        //check num exists in array
        if (index >= 0)
            array.splice(index, 1);
    }
    console.log(array);
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
