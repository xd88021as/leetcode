/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  let result = "";
  const obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  while (num >= 1) {
    let max = 0;
    for (let val of Object.keys(obj)) {
      if (num / val >= 1) {
        max = val;
      }
    }
    result += obj[max];
    num -= max;
  }
  return result;
};
