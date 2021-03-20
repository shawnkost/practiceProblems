/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  const jewelsArr = jewels.split("");
  const stonesArr = stones.split("");
  for (let i = 0; i < jewelsArr.length; i++) {
    for (let j = 0; j < stonesArr.length; j++) {
      if (jewelsArr[i] === stonesArr[j]) {
        count++;
      }
    }
  }
  return count;
};

//initialize count var
//change jewels and stones into arrays
//loop over jewels array
//loop over stones array
//check if jewels[i] === stones[i]
//increase count
//return count
