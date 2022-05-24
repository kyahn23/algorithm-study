/**
 * @param {string} s
 * @return {number}
 */

const val = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  s = 'MCMXCIV';

  let t = s.split('');
  let sum = 0;

  t.forEach((e, i) => {
    sum += val[e] < val[s[i + 1]] ? -val[e] : val[e];
  });

  console.log(sum);
};

romanToInt();
