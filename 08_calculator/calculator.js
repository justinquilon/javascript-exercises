const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (array) {
	const arrayTotal = array.reduce((total, number) => {
		return total + number;
	}, 0);
	return arrayTotal;
};

const multiply = function (array) {
	const arrayTotal = array.reduce((total, number) => {
		return total * number;
	}, 1);
	return arrayTotal;
};

const power = function (num1, num2) {
	return Math.pow(num1, num2);
};

f = [];

const factorial = function (num) {
	if (num == 0 || num == 1) return 1;
	if (f[num] > 0) return f[num];
	return (f[num] = factorial(num - 1) * num);
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
