/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  var idxArr = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        idxArr.push(i);
        idxArr.push(j);
      }
    }
  }
  //   return idxArr;
  console.log(idxArr);
};
twoSum([3, 2, 4], 6);
twoSum([3, 3], 6);
twoSum([3, 6, 7, 9], 15);
