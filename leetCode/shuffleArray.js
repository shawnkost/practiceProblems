/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  const shuffleArr = [];
  for (let i = 0; i < n; i++) {
    shuffleArr.push(nums[i], nums[i + n]);
  }
  return shuffleArr;
};

// intialize shuffle array
// loop over nums array until i = n
// push 1st index into shuffle array
// push i + n into the array
// return array
