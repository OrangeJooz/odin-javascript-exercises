const sumAll = function(a,b) {
    let sum = 0;
    let large = getLargest(a,b);
    let small = getSmallest(a,b);
    
    //check if real number greater than 0
    if (typeof a === 'number' && typeof b === 'number' && a > 0 && b > 0){
        while (small++ < large){
            sum+=small;
        }
        return (sum + 1);
    }
    else
        return 'ERROR';
};

function getLargest(a,b){
    if (a > b)
        return a;
    else
        return b;
}
function getSmallest(a,b){
    if (a < b)
        return a;
    else
        return b;
}

// Do not edit below this line
module.exports = sumAll;
