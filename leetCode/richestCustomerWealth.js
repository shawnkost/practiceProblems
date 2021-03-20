/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
  var res = 0;
  for (var i = 0; i < accounts.length; i++) {
    var temp = 0;
    for (var j = 0; j < accounts[i].length; j++) {
      temp += accounts[i][j];
    }
    res = Math.max(res, temp);
  }
  return res;
};

//initialize richest var
//loop over accounts array
//add all values and check if it's bigger than richest
//return richest
