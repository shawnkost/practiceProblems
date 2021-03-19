var numIdenticalPairs = function (nums) {
  let goodPair = 0;
  for (let i = 0, j = 1; i < nums.length; j++) {
    console.log("i", i);
    console.log("j", j);
    console.log(nums.length - 1);
    if (nums[i] == nums[j]) {
      goodPair++;
    }
    if (j === nums.length - 1) {
      i++;
      j = i;
    }
  }
  return goodPair;
};

//loop over nums array starting at 0 index
//loop overn nums array starting at 1 index
//compare value of 1st loop to 2nd loop
//if nums[i] === nums[j] || nums[i] < nums[j] increase good pair var
//return good pairs
