const repeatString = function(str, numRepeat) {
    let oldStr = str;
    if (numRepeat > 0)
        for (let i = 1; i < numRepeat; i++){
            str += '' + oldStr;
        }
    else if (numRepeat === 0)
        return '';
    else if (numRepeat < 0)
        return 'ERROR';
    return str;
};

// Do not edit below this line
module.exports = repeatString;
