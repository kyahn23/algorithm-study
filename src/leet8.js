/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  while (nums.includes(val)) {
    console.log(nums);
    nums.splice(nums.indexOf(val), 1);
  }
  console.log(nums);
  console.log(nums.length);
};

removeElement([3, 2, 2, 3], 3);
