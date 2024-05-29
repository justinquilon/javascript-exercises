const fibonacci = function (num) {
  if (num < 0) return "OOPS";
  if (num == 0) return 0;

  let fib = [0, 1];

  for (let i = 2; i <= num; i++) {
    nextNumber = fib[i - 2] + fib[i - 1];
    fib.push(nextNumber);
  }
  return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
