const palindromes = function () {
    let success = false;
    Array.from(arguments).forEach((element)=>{
        let word = cleanString(element);
        success = isPalindrome(word, 0);
    })
    return success;
};

function cleanString(str){
    let newStr = '';
    let array = str.split('');
    array.forEach(element => {
        if (isLetter(element))
            newStr += element.toLowerCase();
    });
    return newStr;
}

function isLetter(char){
    if (char.match(/[a-z]/i) === null)
        return false;
    else
        return true; 
}

function isPalindrome(str, index){
    if (str[index] != str[str.length - 1 - index])
        return false;
    else if (index === str.length - 1)
        return true;
    else
        return isPalindrome(str, index + 1);
}

// Do not edit below this line
module.exports = palindromes;
