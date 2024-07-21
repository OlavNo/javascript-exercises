const add = function(num1, num2) {

	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  var sum = array.reduce((total, current) => {
    return total + current;
  }, 0)
  return sum;
};

const multiply = function(array) {
  var mul = array.reduce((total, current) => {
    return total * current;
  })
  return mul;
};

const power = function(num, pow) {
  return Math.pow(num, pow);
};

const factorial = function(num) {
  var fac = 1;
	for (var i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
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
