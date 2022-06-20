const add = function(int1, int2) {
  return int1+int2;
};

const subtract = function(int1, int2) {
	return int1-int2;
};

const sum = function(numbers) {
  let result = 0;
  for(let int of numbers){
    result += int;
  }
  return result;
};

const multiply = function(numbers) {
  let result = 1;
  for(let int of numbers){
    result *= int;
  }
  return result;
};

const power = function(int1, int2) {
	return int1 ** int2;
};

const factorial = function(int) {
	result = 1;
  for(let i = 1; i <= int; i++){
    result *= i;
  }
  return result;
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
