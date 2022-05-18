/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let xArr = String(x).split('');
  let revArr = xArr.reverse();

  return x === Number(revArr.join(''));
};
console.log(isPalindrome(121));
console.log(isPalindrome(1221));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
