/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let temp = address.split(".");
  let newString = temp.join("[.]");
  return newString;
};

//split address by period and assign to variable temp
//join temp by [.] and assign to variable newString
//return newString
