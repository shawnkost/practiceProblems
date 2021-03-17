/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
  let i = 0;
  while (i !== k) {
    const value = nums.pop();
    nums.unshift(value);
    i++;
  }
};

//pop as many values as k is
//unshift those values to the front
