const reverseString = function(str) {
    let newStr = '';
    let array = str.split('');
    for (let i = array.length - 1; i >= 0; i--){
        newStr += array[i];
    }
    return newStr;
};

// Do not edit below this line
module.exports = reverseString;
