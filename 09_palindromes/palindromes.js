const palindromes = function (str) {
  let cleanString = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedString = cleanString.split("").reverse().join("");
  //   console.log(reversedString);
  //   console.log(cleanString);
  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;
