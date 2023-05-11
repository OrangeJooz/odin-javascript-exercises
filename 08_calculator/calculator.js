const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let sum = 0;
  array.forEach(element => {
    if (typeof element === 'number')
      sum+=element;
  });
  return sum;
};

const multiply = function(array) {
  let total = 1;
  array.forEach(element => {
    total *= element;
  });
  return total;
};

const power = function(a,b) {
  let total = 1;
  for (let i = 0; i < b; i++){
    total *= a;
  }
  return total;
};

const factorial = function(a) {
  let total = 1;
  for (let i = a; i > 0; i--){
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
