/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map();

  map.set("{", "}");
  map.set("(", ")");
  map.set("[", "]");

  let rslt = [];
  for (let i = 0; i < s.length; i++) {
    console.log(s.charAt(i));
    console.log(map.has(s.charAt(i)));
    // if (map.has(s.charAt(i))) {
    //   rslt.push(s.charAt(i));
    //   //   console.log("rslt", rslt);
    // } else {
    //   let pop = rslt.pop();
    //   if (map.get(pop) !== s.charAt(i)) {
    //     // console.log("rslt", rslt);
    //   }
    // }
  }

  //   console.log("rslt", rslt.length === 0);
};

isValid("(]");
