const sumAll = function (firstNum, secondNum) {
  let sum = 0;
  let smallNum = 0;
  let bigNum = 0;

  if (
    firstNum < 0 ||
    secondNum < 0 ||
    isNaN(firstNum) ||
    isNaN(secondNum) ||
    typeof firstNum == "string" ||
    typeof secondNum == "string" ||
    firstNum === Array ||
    secondNum === Array
  ) {
    return "ERROR";
  }

  if (firstNum > secondNum) {
    bigNum = firstNum;
    smallNum = secondNum;
  } else {
    bigNum = secondNum;
    smallNum = firstNum;
  }

  for (i = smallNum; i <= bigNum; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
