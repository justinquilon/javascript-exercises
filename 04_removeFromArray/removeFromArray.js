const removeFromArray = function () {
  let removeItemsFromIndex = [];
  for (let i = 1; i < arguments.length; i++) {
    for (let j = 0; j < arguments[0].length; j++) {
      if (arguments[0][j] === arguments[i]) {
        removeItemsFromIndex.push(j);
      }
    }
  }

  removeItemsFromIndex.sort();

  for (let k = removeItemsFromIndex.length - 1; k >= 0; k--) {
    arguments[0].splice(removeItemsFromIndex[k], 1);
  }

  return arguments[0];
};

// console.log(removeFromArray([1, 2, 3], 2, 3));

// Do not edit below this line
module.exports = removeFromArray;
